import React from 'react'
import Link from 'gatsby-link'

const S3Bucket = () => (
  <div>
    <h1>Putting all together</h1>
    <p>
      Now we have everything laid out. We have a git repository on GitHub which
      will be our "source of the truth" for the website we want to publish.
      We set up some stuff on AWS to host this website. And we created an
      account on SemaphoreCI, which will coordinate the magic. Now we will make
      the magic happen.
    </p>
    <ol>
      <li> Go to SemaphoreCI and click "Create new" and then "Project".</li>
      <li> Select GitHub as the repository source.</li>
      <li> Select the cd-course-examle-static repository.</li>
      <li> Pick master as the branch.</li>
      <li> If asked who owns the project, tell semaphore you are the owner.</li>
      <li> Wait for semaphore to analyze the codebase. It should detect it as
      a Node.js-based project.</li>
      <li> Then select 8.9.x as the Node.js version.</li>
      <li> On the "Setup" job click on "+ Add New Command Line" and put
      <code>npm install --global gatsby-cli</code>there.</li>
      <li> On the "Job #1" job click over the <code>npm test</code> line and
      change it to <code>gatsby build</code>.</li>
      <li> Click on "Build with these settings".</li>
    </ol>
    <p>
      Semaphore will now show a page with a "Building..." status. While we wait,
      it's a good moment to see what we have done on the last steps.
    </p>
    <p>
      The "Setup" job is for commands you have to run to prepare the build.
      By default it had the <code>npm install</code> step which is common on
      every nodejs project that uses npm. But as you can see on the README of
      this repository, we also need a global installation of gatsby for the
      site to get built. So we added that command to the "Setup" job.
    </p>
    <p>
      Then the "Job #1" job is what normally runs the automated tests. We don't
      have any tests, but building the site is our poor man's test: if somethig
      is seriously broken, <code>gatsby build</code> should fail.
    </p>
    <p>
      By now semaphore should have changed the "Building..." status to "Passed".
      It means that this site was successfully and automatically built! We now
      just need to upload the result to S3. Let's do that:
    </p>
    <ol>
      <li> Click on cd-course-example-static on the top-left area to go back
      to the project home in semaphore.</li>
      <li> Click the "Set Up Deployment" button.</li>
      <li> Pick AWS S3.</li>
      <li> Select "Automatic" as the strategy.</li>
      <li> Select "master" as the branch.</li>
      <li> Now Semaphore wants to know the the AWS Access Key ID and Secret
      Access Key. How do we get those? </li>
      <li> Go to Amazon AWS Console, click on your username on the top right,
      go to Security Credentials and create new a access key (Note that this
      is not a recommended practice — we will remove this key later on)</li>
      <li> Copy the generated Key ID and Secret to Semaphore</li>
      <li> Also on semaphore: On the region select box, pick the same region you
      used when you created the bucket on S3. If you are unsure under which
      region you created the bucket, <a target="_blank" href="https://s3.console.aws.amazon.com/s3/home">
      go to the S3 Console</a> and find the Region on the list.
      Click "Next Step"</li>
      <li> Under "Directory to upload" type <code>public/</code>. And under
      "Build commands" write the following three lines and click "Next Step".
      <pre>
        npm install --global gatsby-cli <br/>
        npm install <br/>
        gatsby build
      </pre></li>
      <li> Then on the next screen pick the bucket you created from the select
      box under "S3 Bucket" and click "Next Step"</li>
      <li> Now the only thing left is to give this configuration a name (We
      suggest "S3 server") and a URL (We suggest putting the S3 Endpoint:
      <code>http://[bucket-name].s3-website-[region].amazonaws.com</code>)</li>
      <li> Click on "Create Server" and then on the next page click on "Deploy"</li>
    </ol>
    <p>
      Semaphore will now show a page with a "Deploying..." status. Wait until
      it changes to "Deployed". See how the commands executed by semaphore are
      those three commands we gave it as "Build commands" plus a fourth one,
      which actually uploads the files (using a couple of variables which are
      set according to the information you gave)
    </p>
    <p>
      Now go to <code>http://[bucket-name].s3-website-[region].amazonaws.com</code>)
      (using your own bucket name and region). Or click the cryptic
      square-with-arrow-pointing-to-the-top-right icon which you might find
      above the "Deployed" status.
    </p>
    <p>
      You should see your webpage published on the web! Congratulations!
    </p>
    <Link to="/6-test">Are we done? Not yet! Let's change this site!</Link>
  </div>
)

export default S3Bucket
