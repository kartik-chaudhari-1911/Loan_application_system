import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoanApplication } from './pages/loan-application';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LoanApplication />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;