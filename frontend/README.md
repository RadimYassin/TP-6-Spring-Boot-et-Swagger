# Student Management Frontend

A modern React.js frontend for the Student Management System, built with TailwindCSS and Lucide icons.

## Features

- ✨ Modern and responsive UI design
- 📝 Add new students with form validation
- 📋 View all students in a clean table layout
- 🗑️ Delete students with confirmation
- 📊 Display statistics (total count, students by year)
- 🔄 Real-time data synchronization with backend
- 🎨 Beautiful UI with TailwindCSS

## Prerequisites

- Node.js 14+ and npm
- Spring Boot backend running on http://localhost:8080

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Make sure your Spring Boot backend is running on port 8080

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx      # Form to add new students
│   │   ├── StudentList.jsx      # Table to display students
│   │   └── Statistics.jsx       # Statistics cards
│   ├── services/
│   │   └── api.js              # API service layer
│   ├── App.jsx                 # Main application component
│   ├── index.js                # Application entry point
│   └── index.css               # Global styles with TailwindCSS
├── package.json
├── tailwind.config.js
└── README.md
```

## API Endpoints Used

The frontend connects to the following Spring Boot API endpoints:

- `GET /api/all` - Get all students
- `POST /api/save` - Create a new student
- `DELETE /api/delete/{id}` - Delete a student
- `GET /api/count` - Get total student count
- `GET /api/byYear` - Get students grouped by year

## Technologies Used

- **React 18.2** - UI library
- **Axios** - HTTP client
- **TailwindCSS 3.3** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Scripts** - Build tooling

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (one-way operation)

## Configuration

The backend API URL is configured in `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

If your backend runs on a different port, update this URL accordingly.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## License

This project is part of the TP-6-Spring-Boot-et-Swagger assignment.
