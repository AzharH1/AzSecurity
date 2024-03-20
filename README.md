# Full Stack Security Project

This project is a full-stack web application that leverages the power of Java Spring Boot and JWT for secure backend services, a Next.js frontend utilizing TypeScript and TailwindCSS for styling, and Redux for state management. The application's data is stored in a PostgreSQL database, which is containerized using Docker.

## Technology Stack

### Frontend

- **Framework**: Next.js
- **State Management**: Redux
- **Styling**: TailwindCSS
- **Language**: TypeScript

### Backend

- **Framework**: Spring Boot
- **Authentication**: JWT (JSON Web Tokens)
- **Language**: Java
- **Database**: PostgreSQL (Dockerized)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js and npm (for the frontend)
- Docker (for running the PostgreSQL database container)
- Java Development Kit (JDK) for the Spring Boot backend

### Starting the Development Server

First, run the Next.js development server:

````bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result.

### Setting Up the Backend

Navigate to the backend directory:

cd path/to/backend
````

Start the Spring Boot application. This can typically be done through your IDE or the command line:

```sh
./mvnw spring-boot:run
```

Or, if you're using Gradle:

```sh
./gradlew bootRun
```

The backend server will start, typically running on `http://localhost:8080`

### Starting the PostgreSQL Docker Container

Ensure Docker is running on your machine, then build and run your PostgreSQL container:

```sh
docker build -t [user]/postgres-security:[version] .
docker run --name postgres-security -p 5432:5432 -d [user]/postgres-security:[version]
```

This will start a PostgreSQL instance accessible at port `3306` on your localhost.

## API Endpoints

### Unrestricted

- **Register**: `POST /api/v1/auth/register`

  - Registers a new user.
  - Example payload:
    ```json
    {
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "password": "securePassword123"
    }
    ```

- **Authenticate**: `POST /api/v1/auth/authenticate`
  - Authenticates a user and returns a JWT.
  - Use email and password to authenticate.
  ```json
  {
    "email": "john.doe@example.com",
    "password": "securePassword123"
  }

### Restricted

- **Demo Controller**: `GET /api/v1/demo-controller`
  - Access this endpoint using the JWT obtained from authentication.
  ```json
  "accessToken" : "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhLmJAZW1haWwuY29tIiwiaWF0IjoxNzEwODk0Mjc1LCJleHAiOjE3MTA4OTU3MTV9.anAyygC7-6pnqLdeaxiSCktVISMixRJWURLkQ3iKGe4AFLp7BmfCh3HaFsnxOFqC"

## Working with PostgreSQL

To interact with the PostgreSQL database:

- List all databases: `\l`
- Connect to a database: `\c [database_name]`
- List all tables: `\dt`
- Query a table: `SELECT * FROM [table_name];`

## License

This project is licensed under the MIT License.
