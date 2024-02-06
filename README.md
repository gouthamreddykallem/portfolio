Welcome to the portfolio of Mr. Goutham Reddy Kallem, which is hosted in AWS(will be disabled sometimes) at (http://goutham-reddy-kallem.us-west-1.elasticbeanstalk.com/)


<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). -->

## Getting Started

All you need is docker to run this project.


Rename "Dockerfile_dev" to "Dockerfile" for development build

Run the below commands in order to up the application
```
docker build -t username/container_name .

```

Don't forget the "." at the end

Above command will create an image from the Dockerfile.

You can verify it by running
```
docker images
```

```
docker run -p 8888:3000 username/container_name
```



An image of this project is already in my Docker hub, you can directly run the below command to up the site

```
docker run -p 8888:3000 gouthamreddy1109/portfolio
```

This will pull the image and up's the server at (http://localhost:8888/)