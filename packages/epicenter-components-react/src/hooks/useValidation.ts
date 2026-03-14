import { useState } from 'react';

interface ValidationRules<T> {
  [key: string]: (value: any, model: T) => boolean;
}

interface ValidationErrors {
  [key: string]: boolean;
}

interface UseValidationReturn {
  errors: ValidationErrors;
  onInput: (field: string) => void;
  resetValidation: () => void;
  setSubmitted: (value: boolean) => void;
  submitted: boolean;
  validateField: (field: string) => void;
  validateForm: () => boolean;
}

/**
 * Hook for form validation
 * @param model - The form model state
 * @param rules - Validation rules for each field
 * @param conditionalRules - Optional function that returns conditional validation rules based on current state
 * @returns Validation utilities
 */
export function useValidation<T extends Record<string, any>>(
  model: T,
  rules: ValidationRules<T>,
  conditionalRules?: (model: T) => ValidationRules<T>
): UseValidationReturn {
  // Initialize errors object based on rules
  const initialErrors = Object.keys(rules).reduce<ValidationErrors>((acc, field) => {
    acc[field] = false;
    return acc;
  }, {});

  const [errors, setErrors] = useState<ValidationErrors>(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  /**
   * Clear error for a specific field
   */
  const onInput = (field: string) => {
    setErrors((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  /**
   * Validate a specific field
   * Only validates on blur if form has been submitted
   */
  const validateField = (field: string) => {
    // Only validate on blur if form has been submitted
    if (!submitted) {
      return;
    }

    const rule = rules[field];
    if (rule) {
      setErrors((prev) => ({
        ...prev,
        [field]: !rule(model[field], model),
      }));
    }
  };

  /**
   * Validate entire form
   * Always validates all fields when called (typically on submit)
   */
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Validate base rules
    Object.keys(rules).forEach((field) => {
      const rule = rules[field];
      newErrors[field] = !rule(model[field], model);
    });

    // Validate conditional rules if provided
    if (conditionalRules) {
      const conditionals = conditionalRules(model);
      Object.keys(conditionals).forEach((field) => {
        const rule = conditionals[field];
        newErrors[field] = !rule(model[field], model);
      });
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  /**
   * Reset validation state
   */
  const resetValidation = () => {
    setSubmitted(false);
    setErrors(initialErrors);
  };

  return {
    errors,
    submitted,
    onInput,
    validateField,
    validateForm,
    resetValidation,
    setSubmitted,
  };
}
