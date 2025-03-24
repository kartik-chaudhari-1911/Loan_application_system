import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function ProgressSteps({ steps, currentStep, className }: ProgressStepsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center relative z-10">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2",
                    isCompleted ? "bg-green-500 border-green-500" : 
                    isCurrent ? "border-blue-500 bg-white" : 
                    "border-gray-300 bg-white"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className={cn(
                      "text-sm font-medium",
                      isCurrent ? "text-blue-500" : "text-gray-500"
                    )}>
                      {index + 1}
                    </span>
                  )}
                </div>
                <span className={cn(
                  "mt-2 text-sm font-medium",
                  isCurrent ? "text-blue-500" :
                  isCompleted ? "text-green-500" : "text-gray-500"
                )}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "absolute h-[2px] top-4 -z-10",
                  "left-0 right-0 mx-auto w-full",
                  isCompleted ? "bg-green-500" : "bg-gray-200"
                )} style={{
                  left: `${(100 / (steps.length - 1)) * index}%`,
                  width: `${100 / (steps.length - 1)}%`
                }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}