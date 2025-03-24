import { create } from 'zustand';
import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export const financialInfoSchema = z.object({
  income: z.number().min(1000, "Income must be at least 1000"),
  employment: z.enum(["full-time", "part-time", "self-employed", "unemployed"]),
  loanAmount: z.number().min(1000, "Loan amount must be at least 1000"),
  loanPurpose: z.string().min(10, "Please provide more details about the loan purpose"),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type FinancialInfo = z.infer<typeof financialInfoSchema>;

interface LoanState {
  currentStep: number;
  personalInfo: Partial<PersonalInfo>;
  financialInfo: Partial<FinancialInfo>;
  setCurrentStep: (step: number) => void;
  setPersonalInfo: (info: Partial<PersonalInfo>) => void;
  setFinancialInfo: (info: Partial<FinancialInfo>) => void;
  resetForm: () => void;
}

export const useLoanStore = create<LoanState>((set) => ({
  currentStep: 0,
  personalInfo: {},
  financialInfo: {},
  setCurrentStep: (step) => set({ currentStep: step }),
  setPersonalInfo: (info) => set((state) => ({ 
    personalInfo: { ...state.personalInfo, ...info } 
  })),
  setFinancialInfo: (info) => set((state) => ({ 
    financialInfo: { ...state.financialInfo, ...info } 
  })),
  resetForm: () => set({ 
    currentStep: 0, 
    personalInfo: {}, 
    financialInfo: {} 
  }),
}));