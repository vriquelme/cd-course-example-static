import React from 'react'
import Link from 'gatsby-link'

const Intro = () => (
  <div>
    <h1>What are we going to do?</h1>
    <p>
      Assuming you already forked <a href="https://github.com/continuum/cd-course-example-static">
      our repo</a> into your own Github repo, here is what we are doing next:
    </p>
    <ol>
      <li>Create a free tier AWS account</li>
      <li>Create a S3 bucket there to host a web site</li>
      <li>Create a SemaphoreCI account and link it to github</li>
      <li>
        Create a Semaphore project to upload every new push to master to the
        S3 bucket
      </li>
      <li>Make changes to the website to see if we got it right</li>
    </ol>
    <p>
      By following these steps you will have a full CD pipeline working.
      (It might seem simple, but we will have plenty of time to make it a bit
      more complicated later on)
    </p>
    <Link to="/2-aws">Let's begin with AWS</Link>
  </div>
)

export default Intro
