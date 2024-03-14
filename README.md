<h1 align="center">Cloud Note Book</h1>

<p align="center">This project is a MERN stack-based notes management application that allows users to create, read, update, and delete notes. It features a user-friendly interface built with React for the frontend and Express.js for the backend.</p>

## Features

- User authentication with JWT.
- CRUD operations for managing notes (Create, Read, Update, Delete).
- Real-time notification alerts for user actions.
- Responsive design for compatibility across various devices.

## Technologies Used

- React: For building the frontend user interface.
- React Router: For client-side routing.
- Express.js: For building the server-side logic and API endpoints.
- MongoDB: For storing note data securely.
- Mongoose: For object modeling and data validation.
- JSON Web Tokens (JWT): For user authentication.
- express-validator: For validating user input data.

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Configure MongoDB URI in the server environment variables.
5. Start the server using `npm start` in the server directory.
6. Start the React app using `npm start` in the client directory.
7. Access the application in your web browser at `http://localhost:3000`.

## Folder Structure

- **client:** Contains the frontend React code.
- **server:** Contains the backend Express.js code.

## Routes

- **GET /api/notes/getallnotes:** Get all notes associated with the authenticated user.
- **POST /api/notes/addnote:** Add a new note.
- **PUT /api/notes/updatenote/:id:** Update an existing note by ID.
- **DELETE /api/notes/deletenote/:id:** Delete a note by ID.

## Demo

[View Demo](https://cloud-notebook-fe.onrender.com)

## Cloud Note Book

Cloud Note Book is a feature-rich note-taking application designed to streamline your note-taking experience. With features such as real-time collaboration, automatic syncing across devices, and cloud storage integration, Cloud Note Book offers a seamless solution for managing your notes efficiently.

## Contributions

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
