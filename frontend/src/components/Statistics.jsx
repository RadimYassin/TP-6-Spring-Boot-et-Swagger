import React from 'react';
import { BarChart3, Users, Calendar } from 'lucide-react';

const Statistics = ({ totalCount, studentsByYear }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total Students Card */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-primary-100 text-sm font-medium mb-1">Total Étudiants</p>
            <p className="text-4xl font-bold">{totalCount}</p>
          </div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <Users className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Students by Year Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Calendar className="w-6 h-6 text-primary-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-800">Étudiants par Année</h3>
        </div>
        {studentsByYear && studentsByYear.length > 0 ? (
          <div className="space-y-3">
            {studentsByYear.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <BarChart3 className="w-4 h-4 text-primary-500 mr-2" />
                  <span className="text-gray-700 font-medium">
                    {item.year || item[0] || 'Année inconnue'}
                  </span>
                </div>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.count || item[1] || 0}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Aucune donnée disponible</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;
