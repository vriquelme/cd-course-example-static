import React from 'react'
import Link from 'gatsby-link'

const S3Bucket = () => (
  <div>
    <h1>Wrapping up</h1>
    <p>
      Now we have truly finished the journey. Our automated pipeline can deploy
      anything that goes into the master branch as long as it passes the
      automated tests. And when it doesn't passes the tests, it'll let you know.
    </p>
    <p>
      This is a good time to go to fix your webpage and make the build green
      again. Also take your time to navigate around your Semaphore project and
      see how things are connected and traced: Builds with commits, deploys with
      builds. That traceability is a key part of making your process not just
      automated, but also as much repeatable as possible.
    </p>
    <p>
      That way, when things work, you know exactly at what commit and with
      which commands you can create that working build. And when things fail,
      you can confidently reproduce the failing build. So you can debug it.
      And then fix it.
    </p>

  </div>
)

export default S3Bucket
