import React from 'react';
import { useLoanStore } from '@/store/loan-store';

export function Review() {
  const { personalInfo, financialInfo, setCurrentStep } = useLoanStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final submission
    console.log('Form submitted:', { personalInfo, financialInfo });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Review Your Application</h2>
        
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700">Personal Information</h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Full Name</p>
                <p className="text-sm">{personalInfo.firstName} {personalInfo.lastName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm">{personalInfo.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm">{personalInfo.phone}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700">Financial Information</h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Annual Income</p>
                <p className="text-sm">${financialInfo.income?.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Employment Status</p>
                <p className="text-sm">{financialInfo.employment}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Loan Amount</p>
                <p className="text-sm">${financialInfo.loanAmount?.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Loan Purpose</p>
                <p className="text-sm">{financialInfo.loanPurpose}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}