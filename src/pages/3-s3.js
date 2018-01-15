import React from 'react'
import Link from 'gatsby-link'

const S3Bucket = () => (
  <div>
    <h1>Creating an S3 bucket for a website</h1>
    <p>
      <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html">
        Follow steps 1 and 2 on this guide from Amazon.
      </a>. Ignore everything regarding the registered domain name. We will
      use <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html">
      Amazon's website endpoints</a> to access our awesome web site.
    </p>
    <p>
      Also note that bucket names are global. If someone else created a bucket
      with the name you wanted, you will have to find another name :(
    </p>
    <p>
      Ready with the S3 bucket? Let's continue!
    </p>
    <Link to="/4-semaphore">Now we will create a SemaphoreCI account</Link>
  </div>
)

export default S3Bucket
