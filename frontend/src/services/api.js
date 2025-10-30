import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const studentService = {
  // Get all students
  getAllStudents: async () => {
    const response = await api.get('/all');
    return response.data;
  },

  // Create a new student
  createStudent: async (student) => {
    const response = await api.post('/save', student);
    return response.data;
  },

  // Delete a student by ID
  deleteStudent: async (id) => {
    const response = await api.delete(`/delete/${id}`);
    return response.data;
  },

  // Get total count of students
  getStudentCount: async () => {
    const response = await api.get('/count');
    return response.data;
  },

  // Get students grouped by year
  getStudentsByYear: async () => {
    const response = await api.get('/byYear');
    return response.data;
  },
};

export default api;
