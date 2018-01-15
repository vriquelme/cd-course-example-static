import React from 'react'
import Link from 'gatsby-link'

const AWSAccount = () => (
  <div>
    <h1>Creating a AWS account</h1>
    <p>
      First you will create your own free AWS account. As long as you have not
      used AWS under your personal email before, Amazon will grant you a
      generous free quota on the first year.
    </p>
    <p>
      Note that you will need a credit card and a phone number. Amazon will
      validate both before allowing you to proceed with the free account
    </p>
    <p>
      So please go to <a target="_blank" href="https://aws.amazon.com/free/">
      Amazon</a>,complete the registration process and come back once you are done.
    </p>
    <p>
      Ready with the AWS account? Let's continue!
    </p>
    <Link to="/3-s3">Now we will create the S3 bucket</Link>
  </div>
)

export default AWSAccount
