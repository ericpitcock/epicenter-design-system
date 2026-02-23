import { ref } from 'vue'

/**
 * Composable for form validation
 * @param {Object} model - The form model ref
 * @param {Object} rules - Validation rules for each field
 * @param {Function} conditionalRules - Optional function that returns conditional validation rules based on current state
 * @returns {Object} Validation utilities
 */
export default function useValidation(model, rules, conditionalRules = null) {
  // Initialize errors object based on rules
  const errors = ref(
    Object.keys(rules).reduce((acc, field) => {
      acc[field] = false
      return acc
    }, {})
  )

  const submitted = ref(false)

  /**
   * Clear error for a specific field
   */
  const onInput = (field) => {
    errors.value[field] = false
  }

  /**
   * Validate a specific field
   * Only validates on blur if form has been submitted
   */
  const validateField = (field) => {
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
  const validateForm = () => {
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
  const resetValidation = () => {
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
