# cd-course-example-static
Very simple static website, to work as an example for our CD/CI course.

It was created with Gatsby. For an overview of the project structure please
refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

# Development setup

Make sure you have a working Node.js environment first. Then you need to install
gatsby to work with this site. To do so run:

    $ npm install --global gatsby-cli

Then also install all the project dependencies with:

    $ npm install

After installing gatsby you can run it live on your development machine with:

    $ gatsby develop

And you can export the static site running:

    $ gatsby build

...which will build everything under `public/`.
