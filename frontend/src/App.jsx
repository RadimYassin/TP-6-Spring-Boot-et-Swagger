import React, { useState, useEffect } from 'react';
import { GraduationCap, RefreshCw, AlertCircle } from 'lucide-react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Statistics from './components/Statistics';
import { studentService } from './services/api';

function App() {
  const [students, setStudents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [studentsByYear, setStudentsByYear] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all data
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [studentsData, countData, yearData] = await Promise.all([
        studentService.getAllStudents(),
        studentService.getStudentCount(),
        studentService.getStudentsByYear(),
      ]);

      setStudents(studentsData);
      setTotalCount(countData);
      setStudentsByYear(yearData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Erreur de connexion au serveur. Assurez-vous que le backend est en cours d\'exécution sur http://localhost:8080');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle adding a student
  const handleAddStudent = async (studentData) => {
    try {
      await studentService.createStudent(studentData);
      await fetchData(); // Refresh all data
    } catch (err) {
      console.error('Error adding student:', err);
      setError('Erreur lors de l\'ajout de l\'étudiant');
      throw err;
    }
  };

  // Handle deleting a student
  const handleDeleteStudent = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
      try {
        await studentService.deleteStudent(id);
        await fetchData(); // Refresh all data
      } catch (err) {
        console.error('Error deleting student:', err);
        setError('Erreur lors de la suppression de l\'étudiant');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                Système de Gestion des Étudiants
              </h1>
            </div>
            <button
              onClick={fetchData}
              disabled={isLoading}
              className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-400"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Actualiser
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Alert */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
            <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-800 font-semibold">Erreur</h3>
              <p className="text-red-700 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="mb-8">
          <Statistics totalCount={totalCount} studentsByYear={studentsByYear} />
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Form */}
          <div className="lg:col-span-1">
            <StudentForm onStudentAdded={handleAddStudent} />
          </div>

          {/* Student List */}
          <div className="lg:col-span-2">
            <StudentList
              students={students}
              onDeleteStudent={handleDeleteStudent}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2024 Student Management System. Créé avec React et Spring Boot.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
