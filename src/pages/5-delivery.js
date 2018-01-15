import React from 'react'
import Link from 'gatsby-link'

const S3Bucket = () => (
  <div>
    <h1>Putting all together</h1>
    <p>
      Now we have everything laid out. We have a git repository on GitHub which
      will be our "source of the truth" for the website we want to publish.
      We set up some stuff on AWS to host this website. And we have an account
      on SemaphoreCI, which will coordinate the magic. It's time to make the
      magic happen.
    </p>
    <ol>
      <li> Go to SemaphoreCI and click "Create new" and then "Project"</li>
      <li> Select GitHub as the repository source </li>
      <li> Select the cd-course-examle-static repository</li>
      <li> Pick master as the branch </li>
      <li> If asked who owns the project, tell semaphore it's  yourself</li>
      <li> Wait for semaphore to analyze the codebase</li>
    </ol>
    <p>
      TODO: More instructions on how to proceed later on.
    </p>
    <Link to="/6-test">Are we done? Not yet! Let's change this site!</Link>
  </div>
)

export default S3Bucket
