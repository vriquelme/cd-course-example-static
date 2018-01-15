import React from 'react'
import Link from 'gatsby-link'

const S3Bucket = () => (
  <div>
    <h1>Changing our webpage</h1>
    <p>
      Did you know you could edit a file directly on GitHub? We are not saying
      it's a good idea to edit your source code directly on a web interface...
      but it's kind of cool!
    </p>
    <p>
      Yep. We are about to use GitHub as a poor man's CMS.
    </p>
    <p>
      Go to
      https://github.com/[your-github-user-name]/cd-course-example-static/blob/master/src/pages/index.js
      (Replace <code>[your-github-user-name]</code>, of course) and click on the pencil
      button at the top right of the file's content. Spanish is all on the rage
      lately so let's change that old fashioned "Hello World!" by a nice
      sounding "Hola mundo!". Then click "Commit change" (scroll down on the
      page to find that button) and voila!
    </p>
    <p>
      Now hurry up! Go to https://semaphoreci.com/[your-semaphore-user-name]/cd-course-example-static
      and see how semaphore is automatically building the site. Wait and see how
      it goes from blue ("Building...") to green ("Passed") and then the server
      below goes also from blue ("Deploying...") to green ("Deployed").
    </p>
    <p>
      After the server goes green click on the server name ("S3 server" if you
      followed our recommendation) and then on the server page click on the URL.
      There is your website now with a friendly Spanish greeting :)
    </p>
    <p>
      But what if our reckless (ab)use of the GitHub edit button breaks the
      site? Well, let's see what happens!
    </p>
    <p>
      Go again to
      https://github.com/[your-github-user-name]/cd-course-example-static/blob/master/src/pages/index.js
      and edit the file. After the lovely "Hola Mundo!" remove the <code>h1</code> tag.
      Scroll down and commit the changes.
    </p>
    <p>
      Again go to https://semaphoreci.com/[your-semaphore-user-name]/cd-course-example-static
      It will go from blue ("Bulding...") to red ("Failed"). If you click on
      the "FAILED" tag, then on the red-marked "Job #1" you can see how the
      <code>gatsby build</code> command failed. You can also click on it to
      see the error output.
    </p>
    <Link to="/7-end">Wonderful! So...What did we achive will all these things?</Link>
  </div>
)

export default S3Bucket
