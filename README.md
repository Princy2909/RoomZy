# Rental Property Management API

This project is the backend service for a rental property management platform. It provides a robust RESTful API for user authentication (including OTP verification and password reset) and comprehensive CRUD operations for managing rental property listings. The system is built with Node.js, Express, and MongoDB, following a layered architecture for maintainability and scalability.

## High-Level Architecture

The architecture separates concerns into distinct layers: Routing, Controllers, Services, and Repositories (Data Access). This design ensures that business logic is decoupled from the web framework and database implementation.

mermaid
graph TD
    subgraph Client
        A[React App / Postman]
    end

    subgraph "Backend API (Node.js/Express)"
        B[Express Routes]
        C[Middleware & Validators]
        D[Controllers]
        E[Services]
        F[Repositories]
    end

    subgraph "External Services"
        G[MongoDB Database]
        H[Email Service]
    end

    A -->|API Calls| B
    B --> C
    C --> D
    D -->|Calls Business Logic| E
    E -->|Abstracts Data Access| F
    E -->|Sends OTP/Notifications| H
    F -->|Performs CRUD| G


## Getting Started

Follow these instructions to get the backend server up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [MongoDB](https://www.mongodb.com/try/download/community) instance (local or cloud-hosted like MongoDB Atlas)

### Installation & Setup

1.  *Clone the repository:*
    sh
    git clone <repository-url>
    cd <repository-directory>
    

2.  *Install dependencies:*
    sh
    npm install
    

3.  *Create an environment file:*
    Create a .env file in the root of the project and add the following environment variables.

    env
    # MongoDB Connection String
    MONGO_URI=mongodb://localhost:27017/rentalDB

    # JSON Web Token Secret
    JWT_SECRET=your_super_secret_jwt_key

    # Nodemailer (Gmail) configuration for sending emails
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-gmail-app-password
    
    > *Note:* For EMAIL_PASS, it is highly recommended to use a Gmail "App Password" rather than your regular account password.

4.  *Start the server:*
    sh
    node index.js
    
    The server should now be running on http://localhost:8000.

## Module Breakdown

This project follows a standard layered architecture. Below is a breakdown of the key files and directories.

### Root Directory

-   index.js: The main entry point for the application. It initializes the Express server, connects to the database using the configuration from server-config.js, applies middleware, and starts listening for incoming requests.
-   vite.config.js / eslint.config.js: Configuration files for the frontend Vite build tool and ESLint for code linting.
-   index.html: The main HTML template for the React frontend application.

### config/

-   server-config.js: Manages the connection to the MongoDB database using Mongoose. It reads the MONGO_URI from the environment variables.
-   logger-config.js: Configures the winston logger for application-wide logging. It sets up transports for console output and file logging (combined.log) with a custom format.

### routes/

-   index.js: The main router file. It consolidates all feature-specific routers (like authRoutes and room-routes) and exports them as a single module to be used in the main index.js.
-   authRoutes.js: Defines all API endpoints related to user authentication, such as /signup, /login, /verify-otp, /forgot-password, and /reset-password. It maps these routes to the corresponding controller functions in authController.js.
-   room-routes.js: Defines the RESTful API endpoints for managing rental properties. This includes routes for creating, reading, updating, deleting, and searching for rooms.

### controllers/

-   authController.js: Handles incoming HTTP requests for authentication routes. It receives requests, calls the appropriate methods in authService.js to perform the business logic, and sends back the HTTP response (e.g., success message, JWT token, or error).
-   room-controller.js: Manages the request/response cycle for rental property CRUD operations. It delegates the core logic to room-service.js and formats the final response to the client.
-   info-controller.js: A simple controller for a health-check or status endpoint, confirming the API is operational.

### services/

-   authService.js: Contains the core business logic for user authentication. It handles user registration, OTP generation and verification, password hashing with bcrypt, JWT generation, and coordinating with the user-repository and sendEmail utility.
-   room-service.js: Acts as an intermediary between the room-controller and room-repository. It contains business logic related to managing rental properties, ensuring that data is validated or processed before being sent to the repository layer.

### repositories/

-   user-repository.js: The data access layer for user-related operations. It contains all the Mongoose queries for interacting with the User collection in the database (e.g., findByEmail, createUser, updateUser).
-   room-repository.js: The data access layer for rental properties. It encapsulates all database interactions for the roomModel, including creating a room and linking it to an owner, finding rooms by various criteria, and handling updates and deletions.

### models/

-   Usermodel.js: Defines the Mongoose schema for a User. This includes fields like firstName, email, password (hashed), verification status (isVerified), OTP details, and a reference to the properties they own.
-   roommodel.js: Defines the Mongoose schema for a rental property (roomModel). It includes detailed fields such as owner, location, property features (bedrooms, bathrooms), rent details, and photos.

### middlewares/

-   validator.js: Contains Express middleware functions for validating incoming request bodies. For example, validateSignup checks if the required fields (firstName, email, password) are present and meet specific criteria before the request reaches the controller.

### utils/

-   sendEmail.js: A utility module that uses nodemailer to send emails. It is configured to use Gmail and is used by the authService to send OTPs for email verification and password resets.

### Frontend (src/)

The repository also contains a basic React + Vite frontend structure.
-   App.css, index.css, OTPSender.css, LoginScreen.css, SignupScreen.css, ForgotPassword.css: CSS files that provide styling for the various frontend components and screens of the React application.
