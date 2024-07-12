import React from 'react';
import ProfileCard from './ProfileCard';
import StatisticsCard from './StatisticsCard';
import SubmissionsCard from './SubmissionsCard';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>
        {/* Statistics and Submissions Section */}
        <div className="lg:col-span-2 space-y-6">
          <StatisticsCard />
          <SubmissionsCard />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
