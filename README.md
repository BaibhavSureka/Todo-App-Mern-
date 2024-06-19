# TODO APP

This is a simple ToDo application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to sign up, sign in, view their todos, add new todos, and delete existing todos.

![image](https://github.com/BaibhavSureka/Todo-App-Mern-/assets/83425243/ce04e468-ed74-4bf6-8c53-4016d62e9604)

![image](https://github.com/BaibhavSureka/Todo-App-Mern-/assets/83425243/e7c45326-9829-4f4c-b7be-541301b4a120)

## Features

- **Sign Up:** Users can create a new account by providing their email and password.
- **Sign In:** Existing users can sign in to their accounts securely.
- **Get Todos:** Once logged in, users can view their existing todos.
- **Add Todo:** Users can add new todos with a title and description.
- **Delete Todo:** Users can delete todos they no longer need.

## Technologies Used

- **MongoDB:** Used as the database to store user information and todos.
- **Express.js:** Backend framework for handling HTTP requests and routes.
- **React.js:** Frontend framework for building the user interface.
- **Node.js:** JavaScript runtime environment for running server-side code.
  
# Installation
Run the following command to clone the repository
```
git clone https://github.com/BaibhavSureka/Todo-App-Mern-
```
Go to ```frontend``` and ```backend``` directory to install packages
```
cd frontend
npm i
```
```
cd backend
npm i
```
# Configuration
Create ```.env``` file inside ```backend``` directory and copy the following code

```
MONGO_URI=Your mongodb URI
PORT=8000
JWT_SECRET=a random secret key eg. thisisasecretkey
```
# Run the App
Go to ```backend``` and ```frontend``` directory and start the server
```
cd backend
node server.js
```
```
cd frontend
npm run dev
```
## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to help improve this project.
