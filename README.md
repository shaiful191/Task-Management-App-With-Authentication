# Task Management App

This project is a **Task Management App** built with **Node.js**, **Express**, and **MongoDB**. The app features a secure user authentication system, task management capabilities, and proper error handling, demonstrating robust backend development practices using the **MVC (Model-View-Controller) architecture**.

## 🚀 Features

- **User Authentication**: Register, login, and logout functionality with **JWT** and secure password hashing using **bcrypt**.
- **Task Management**: Users can create, update, and delete tasks. Task status can be toggled to indicate completion.
- **Error Handling**: Comprehensive error handling to manage various edge cases efficiently.
- **Cookies & Authentication**: Secure cookies to handle user sessions, compliant with development and production environments.
- **Database Integration**: Data persistence using **MongoDB** with **Mongoose**.
- **Environment Configuration**: Secure configuration management using **dotenv**.

## 🏛️ Architecture

The app follows the **MVC (Model-View-Controller) architecture**, which separates the application into three interconnected components:

- **Model**: Defines the data schema using Mongoose and handles database operations.
- **View**: Not applicable in this backend-focused project but could represent the response data in a full-stack setup.
- **Controller**: Manages the logic and interacts with the Model to process requests and send appropriate responses.

## 🛠️ Technologies Used

- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [JWT](https://jwt.io/), [bcrypt](https://www.npmjs.com/package/bcrypt)
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)
- **HTTP Cookie Handling**: [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- **Cross-Origin Resource Sharing**: [CORS](https://www.npmjs.com/package/cors)

## 📂 Project Structure

   ```bash
   src
│
├── controllers          # Controllers for handling business logic
│   ├── task.js          # Task controller logic
│   └── user.js          # User controller logic
│
├── middlewares          # Middleware functions for authentication and error handling
│   ├── auth.js          # Authentication middleware
│   └── error.js         # Error handling middleware
│
├── models               # Models for data schema and database interaction
│   ├── task.js          # Task schema and model
│   └── user.js          # User schema and model
│
├── routes               # Routes for defining API endpoints
│   ├── task.js          # Task routes
│   └── user.js          # User routes
│
├── data                 # Database connection configuration
│   └── database.js      # Database connection
│
├── utils                # Utility functions
│   └── features.js      # Utility functions (e.g., sending cookies)
│
├── app.js               # Express app setup
└── server.js            # Server configuration and startup
  ```



## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shaiful191/Task-Management-App-With-Authentication.git
   cd Task-Management-App-With-Authentication
   
2. **Install dependencies**:
   ```bash
   npm install
   
3. **Configure environment variables**:
   - Create a .env file in the root of the project and add the following:
   ```bash
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/
   JWT_SECRET=your-secret-key
   NODE_ENV=Development
   ```

5. **Start the application**:
   - For development:
   ```bash
   npm run dev
   ```
   - For production:
   ```bash
   npm start
   ```


## 🧪 API Endpoints

### User Routes

- **POST** `/api/v1/users/register` - Register a new user
- **POST** `/api/v1/users/login` - Log in a user
- **GET** `/api/v1/users/logout` - Log out a user
- **GET** `/api/v1/users/profile` - Get user profile (protected)

### Task Routes

- **POST** `/api/v1/task/create` - Create a new task (protected)
- **GET** `/api/v1/task/my` - Get all tasks for the logged-in user (protected)
- **PUT** `/api/v1/task/:id` - Toggle task completion status (protected)
- **DELETE** `/api/v1/task/:id` - Delete a task (protected)

---

## 🔒 Security Features

- **Password Hashing**: Using **bcrypt** to ensure secure storage of user passwords.
- **JWT**: Secure token-based authentication for managing user sessions.
- **CORS**: Configured to restrict API access to specific frontend URLs.
- **Cookie Handling**: HttpOnly and secure flags used for cookies in production.

---

## 💡 Key Concepts Learned

- Structuring a **Node.js** project using **MVC architecture** for scalability and maintainability.
- Implementing middleware for authentication and error handling.
- Using **Mongoose** for data modeling and database operations.
- Handling environment-specific configurations for secure and efficient development.

---

## 📜 Future Improvements

- Enhancing task functionality with reminders and categorization.
- Integrating unit and integration testing for API endpoints.
- Optimizing performance with caching strategies.

---

## 📬 Contact

- **Author**: Shaiful Islam
- **Email**: [shaifulislam2651@gmail.com](mailto:shaifulislam2651@gmail.com)
- **LinkedIn**: [https://linkedin.com/in/shaiful191](https://linkedin.com/in/shaiful191)

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Thank you for checking out my project! Feel free to contribute or reach out for any inquiries.* 🚀

