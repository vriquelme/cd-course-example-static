import React from 'react'
import Link from 'gatsby-link'

const S3Bucket = () => (
  <div>
    <h1>Creating a SemaphoreCI account</h1>
    <p>
      <a target="_blank" href="https://semaphoreci.com/">
        Go to SemaphoreCI and register with your GitHub account
      </a>
    </p>
    <p>
      That was easy, wasn't it? We didn't really need to add here but the
      page would look a bit empty otherwise. It also serves to take a breath
      before the final part, which won't be sooo easy ;)
    </p>
    <Link to="/5-delivery">Finally, let's put it all together</Link>
  </div>
)

export default S3Bucket
