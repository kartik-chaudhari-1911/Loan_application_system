import React from 'react';
import { useLoanStore, financialInfoSchema } from '@/store/loan-store';

export function FinancialInfoForm() {
  const { financialInfo, setFinancialInfo, setCurrentStep } = useLoanStore();
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      financialInfoSchema.parse(financialInfo);
      setCurrentStep(2);
    } catch (error: any) {
      const formattedErrors: Record<string, string> = {};
      error.errors.forEach((err: any) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const numericFields = ['income', 'loanAmount'];
    
    setFinancialInfo({ 
      [name]: numericFields.includes(name) ? Number(value) : value 
    });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="income" className="block text-sm font-medium text-gray-700">
          Annual Income
        </label>
        <input
          type="number"
          id="income"
          name="income"
          value={financialInfo.income || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.income && (
          <p className="mt-1 text-sm text-red-600">{errors.income}</p>
        )}
      </div>

      <div>
        <label htmlFor="employment" className="block text-sm font-medium text-gray-700">
          Employment Status
        </label>
        <select
          id="employment"
          name="employment"
          value={financialInfo.employment || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select status</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="self-employed">Self Employed</option>
          <option value="unemployed">Unemployed</option>
        </select>
        {errors.employment && (
          <p className="mt-1 text-sm text-red-600">{errors.employment}</p>
        )}
      </div>

      <div>
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
          Loan Amount
        </label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          value={financialInfo.loanAmount || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.loanAmount && (
          <p className="mt-1 text-sm text-red-600">{errors.loanAmount}</p>
        )}
      </div>

      <div>
        <label htmlFor="loanPurpose" className="block text-sm font-medium text-gray-700">
          Loan Purpose
        </label>
        <textarea
          id="loanPurpose"
          name="loanPurpose"
          value={financialInfo.loanPurpose || ''}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.loanPurpose && (
          <p className="mt-1 text-sm text-red-600">{errors.loanPurpose}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(0)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}