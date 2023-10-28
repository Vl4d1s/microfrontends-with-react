# Microfrontends with React
This repository contains a microfrontends architecture with a combination of different frontend frameworks. It includes four packages, each serving a specific purpose:

1. Container (React): This package acts as the host for other applications and manages the routing between them.
 
2. Auth (React): This package provides functionalities related to authentication, such as signin and signout pages.
 
3. Dashboard (Vue): This package represents the dashboard application and is built using the Vue framework.
 
4. Marketing (React): This package focuses on marketing-related pages and components.

Deployment, CI, and Content Delivery
* The application is deployed to AWS S3, serving as the hosting service for the static files.

* The CI process is set up using GitHub Actions.
  
* To improve performance and deliver static assets efficiently, the application integrates with CloudFront, an AWS Content Delivery Network (CDN).

For detailed documentation and setup instructions, please refer to the respective package directories.
Feel free to explore and contribute to this microfrontends architecture. Happy coding!
