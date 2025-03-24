import React from 'react';
import { ProgressSteps } from '@/components/ui/progress-steps';
import { useLoanStore } from '@/store/loan-store';
import { PersonalInfoForm } from '@/components/forms/personal-info-form';
import { FinancialInfoForm } from '@/components/forms/financial-info-form';
import { DocumentUpload } from '@/components/forms/document-upload';
import { Review } from '@/components/forms/review';

const steps = [
  "Personal Information",
  "Financial Details",
  "Document Upload",
  "Review & Submit"
];

export function LoanApplication() {
  const { currentStep } = useLoanStore();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <FinancialInfoForm />;
      case 2:
        return <DocumentUpload />;
      case 3:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Loan Application
      </h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <ProgressSteps 
          steps={steps} 
          currentStep={currentStep} 
          className="mb-8"
        />
        
        <div className="mt-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}