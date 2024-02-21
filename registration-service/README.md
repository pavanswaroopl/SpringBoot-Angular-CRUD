## Registration Service API

This is a simple registration service API built using Spring Boot for managing user registrations. It provides endpoints to register users, retrieve all users, find users by email, and cancel user registrations. The service utilizes a MySQL database to store user information.

### Features

- **User Registration**: Allows users to register by providing their name, email, experience, and domain.
- **Retrieve All Users**: Retrieves a list of all registered users.
- **Find User by Email**: Searches for a user by their email address.
- **Cancel Registration**: Cancels the registration of a user by their ID.

### Endpoints

- `POST /register`: Register a new user.
- `GET /getAllUsers`: Retrieve all registered users.
- `GET /findUser/{email}`: Find a user by email.
- `DELETE /cancel/{id}`: Cancel the registration of a user by ID.

### Technologies Used

- **Spring Boot**: For building and managing the RESTful API.
- **Spring Data JPA**: For interaction with the MySQL database.
- **Lombok**: For reducing boilerplate code in model classes.
- **MySQL**: As the database to store user information.

### Setup

1. **Database Configuration**:
   - Ensure MySQL is installed and running.
   - Configure the `application.properties` file with your MySQL database credentials.

2. **Build and Run**:
   - Run the `RegistrationServiceApplication` class to start the Spring Boot application.
   - The application will run on port 5000 by default.

### Usage

- Use any HTTP client (e.g., Postman) to send requests to the API endpoints.
- Refer to the provided endpoints documentation above for specific usage details.

### Note

- This is a basic implementation and can be extended with additional features like authentication, validation, etc., as per requirements.

Feel free to contribute and enhance this service further! If you have any questions or suggestions, please feel free to reach out.