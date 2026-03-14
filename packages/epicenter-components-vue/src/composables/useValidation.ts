import { type Ref, ref } from 'vue'

import type { ConditionalRules, ValidationErrors, ValidationRules } from '../types'

/** Return type of the useValidation composable */
export interface UseValidationReturn {
  /** Reactive map of field names to error state (true = invalid) */
  errors: Ref<ValidationErrors>
  /** Clear the error for a specific field (call on input) */
  onInput: (field: string) => void
  /** Reset all errors and the submitted flag */
  resetValidation: () => void
  /** Whether the form has been submitted at least once */
  submitted: Ref<boolean>
  /** Validate a single field (call on blur) — only fires after first submit */
  validateField: (field: string) => void
  /** Validate the entire form; returns `true` if all fields pass */
  validateForm: () => boolean
}

/**
 * Composable for form validation.
 *
 * @param model - Reactive form model ref
 * @param rules - Validation rules keyed by field name
 * @param conditionalRules - Optional function returning extra rules based on current model state
 */
export default function useValidation<T extends Record<string, unknown>>(
  model: Ref<T>,
  rules: ValidationRules<T>,
  conditionalRules: ConditionalRules<T> | null = null
): UseValidationReturn {
  // Initialize errors object based on rules
  const errors: Ref<ValidationErrors> = ref(
    Object.keys(rules).reduce<ValidationErrors>((acc, field) => {
      acc[field] = false
      return acc
    }, {})
  )

  const submitted = ref(false)

  /**
   * Clear error for a specific field
   */
  const onInput = (field: string): void => {
    errors.value[field] = false
  }

  /**
   * Validate a specific field
   * Only validates on blur if form has been submitted
   */
  const validateField = (field: string): void => {
    // Only validate on blur if form has been submitted
    if (!submitted.value) {
      return
    }

    const rule = rules[field]
    if (rule) {
      errors.value[field] = !rule(model.value[field], model.value)
    }
  }

  /**
   * Validate entire form
   * Always validates all fields when called (typically on submit)
   */
  const validateForm = (): boolean => {
    // Validate base rules
    Object.keys(rules).forEach(field => {
      const rule = rules[field]
      errors.value[field] = !rule(model.value[field], model.value)
    })

    // Validate conditional rules if provided
    if (conditionalRules) {
      const conditionals = conditionalRules(model.value)
      Object.keys(conditionals).forEach(field => {
        const rule = conditionals[field]
        errors.value[field] = !rule(model.value[field], model.value)
      })
    }

    return !Object.values(errors.value).some(error => error)
  }

  /**
   * Reset validation state
   */
  const resetValidation = (): void => {
    submitted.value = false
    Object.keys(errors.value).forEach(field => {
      errors.value[field] = false
    })
  }

  return {
    errors,
    submitted,
    onInput,
    validateField,
    validateForm,
    resetValidation
  }
}
