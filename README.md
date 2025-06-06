# Catalyst

Catalyst is a fullstack framework for TypeScript, designed to accelerate development with a curated set of modern tools. It leverages [NextJs](https://nextjs.org/) for both frontend and backend, [ShadCn](https://ui.shadcn.com/) for UI components, [Drizzle ORM](https://orm.drizzle.team/) for database interactions, and more, providing a robust foundation for building scalable applications. By combining the best tools in the TypeScript ecosystem, Catalyst offers a seamless development experience, from UI design to AI integration and analytics.

## Tech Stack

The following tools are integrated to provide a comprehensive development environment:

| Tool                   | Description                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **NextJs**             | A React framework for building server-side rendered and static websites, offering a solid foundation for fullstack development.      |
| **ShadCn**             | A collection of beautifully designed, accessible UI components that integrate seamlessly with NextJs for rapid UI development.       |
| **TweakCn**            | A visual theme editor for customizing ShadCn components, supporting Tailwind CSS for real-time theme modifications.                  |
| **Playwright Testing** | A browser automation library for end-to-end testing, ensuring application reliability across Chromium, Firefox, and WebKit browsers. |
| **Drizzle ORM**        | A lightweight TypeScript ORM for managing database interactions with type safety, supporting PostgreSQL, MySQL, and SQLite.          |
| **Better Auth**        | A comprehensive authentication framework for TypeScript, offering features like 2FA and multi-tenant support with minimal code.      |
| **Polar Payment**      | A payment infrastructure for integrating seamless payment processing for SaaS and digital products, handling billing and taxes.      |
| **Langchain**          | A framework for integrating large language models to add AI capabilities like chatbots and document analysis to applications.        |
| **NeonDB**             | A serverless PostgreSQL database service with features like autoscaling and branching for scalable and reliable data storage.        |
| **MailGun**            | An email delivery service for sending, receiving, and tracking transactional emails with robust APIs for developers.                 |
| **PostHog**            | An open-source product analytics platform for tracking user behavior, session recording, and feature flagging to optimize products.  |

## Setup

To set up Catalyst for local development, follow these steps:

1. **Clone the Repository**:
   Clone the project from its GitHub repository and navigate to the project directory:

   ```bash
   git clone https://github.com/username/framework-name.git
   cd framework-name
   ```

2. **Install Dependencies**:
   Install the required Node.js packages using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the project root by copying the provided `.env.example` file. Fill in the required values for services such as:

   - **NeonDB**: Obtain a connection string from [Neon](https://neon.com/) after signing up.
   - **MailGun**: Get API keys from [MailGun](https://www.mailgun.com/) for email services.
   - **Polar Payment**: Acquire credentials from [Polar](https://polar.sh/) for payment integration.
   - **PostHog**: Set up an account on [PostHog](https://posthog.com/) to get the API key.
   - **Langchain**: If using external LLMs, include necessary API keys (e.g., for OpenAI or other providers).
     Ensure all required environment variables are correctly configured to avoid runtime errors.

4. **Run Database Migrations**:
   Apply the database schema migrations using Drizzle ORM to set up the database:

   ```bash
   npx drizzle-kit migrate
   ```

   Note: Ensure the NeonDB connection string is set in the `.env` file before running migrations. If using a local PostgreSQL database for development, configure the connection string accordingly.

5. **Start the Development Server**:
   Launch the application in development mode:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   The application should now be accessible at `http://localhost:3000`.

## Docker and Deployment

### Building the Docker Image

To containerize Catalyst for consistent deployment across environments:

1. **Build the Docker Image**:
   Use the provided Dockerfile to build the image. Ensure you have [Docker](https://www.docker.com/) installed:

   ```bash
   docker build -t framework-name .
   ```

2. **Run the Container Locally**:
   Test the application by running the Docker container locally, ensuring the `.env` file is correctly configured:
   ```bash
   docker run -p 3000:3000 --env-file .env framework-name
   ```
   The application will be available at `http://localhost:3000`. Verify that all environment variables for NeonDB, MailGun, Polar Payment, and other services are set in the `.env` file to avoid connection issues.

### Deployment

To deploy Catalyst, you can use a Docker-based approach or leverage Vercel for NextJs applications.

#### Docker-Based Deployment

1. **Push the Image to a Container Registry**:
   Tag the Docker image with your registry username and desired tag:

   ```bash
   docker tag framework-name username/framework-name:tag
   ```

   Push the image to a container registry like Docker Hub or GitHub Container Registry:

   ```bash
   docker push username/framework-name:tag
   ```

2. **Deploy to a Cloud Platform**:
   Deploy the Docker image to a platform that supports Docker containers, such as:
   - **AWS Elastic Container Service (ECS)**: Configure a task definition with the image and environment variables.
   - **Google Cloud Run**: Deploy the image with appropriate environment variables for scalability.
   - **DigitalOcean App Platform**: Use the platform’s container deployment features.
     Follow the specific platform’s documentation to set up the deployment, ensuring all environment variables are configured in the platform’s interface or via a `.env` file.

#### Vercel Deployment (Alternative)

Since Catalyst is built with NextJs, you can deploy it directly to [Vercel](https://vercel.com/docs) by linking your Git repository:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Connect the repository to Vercel via the Vercel dashboard.
3. Configure environment variables in Vercel’s settings for NeonDB, MailGun, Polar Payment, PostHog, and Langchain.
4. Deploy the application, and Vercel will handle the build and deployment process automatically.

For Docker-based deployments, ensure that the platform supports the necessary environment variables and has access to external services like NeonDB. For Vercel, the deployment is simpler but may not use the Docker image directly.
