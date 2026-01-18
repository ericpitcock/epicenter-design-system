import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useValidation } from '../../../packages/epicenter-react-components/src/hooks/useValidation';

const meta: Meta = {
  title: 'Hooks/useValidation',
  parameters: {
    docs: {
      description: {
        component: 'A hook for form validation with field-level and form-level validation support.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

interface FormModel {
  email: string;
  password: string;
  confirmPassword: string;
}

function ValidationDemo() {
  const [formData, setFormData] = useState<FormModel>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const rules = {
    email: (value: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    password: (value: string) => {
      return value.length >= 8;
    },
    confirmPassword: (value: string, model: FormModel) => {
      return value === model.password;
    },
  };

  const { errors, submitted, onInput, validateField, validateForm, resetValidation, setSubmitted } = useValidation(
    formData,
    rules
  );

  const handleInputChange = (field: keyof FormModel, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    onInput(field);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const isValid = validateForm();
    if (isValid) {
      alert('Form is valid!');
    } else {
      alert('Form has errors!');
    }
  };

  const handleReset = () => {
    setFormData({ email: '', password: '', confirmPassword: '' });
    resetValidation();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Form Validation Demo</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => validateField('email')}
            style={{
              width: '100%',
              padding: '8px',
              borderColor: errors.email ? 'red' : '#ccc',
            }}
          />
          {errors.email && <div style={{ color: 'red', fontSize: '12px' }}>Invalid email format</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password (min 8 characters):
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            onBlur={() => validateField('password')}
            style={{
              width: '100%',
              padding: '8px',
              borderColor: errors.password ? 'red' : '#ccc',
            }}
          />
          {errors.password && <div style={{ color: 'red', fontSize: '12px' }}>Password must be at least 8 characters</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Confirm Password:
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            onBlur={() => validateField('confirmPassword')}
            style={{
              width: '100%',
              padding: '8px',
              borderColor: errors.confirmPassword ? 'red' : '#ccc',
            }}
          />
          {errors.confirmPassword && <div style={{ color: 'red', fontSize: '12px' }}>Passwords do not match</div>}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>

        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <strong>State:</strong>
          <pre>{JSON.stringify({ submitted, errors }, null, 2)}</pre>
        </div>
      </form>
    </div>
  );
}

export const Default: Story = {
  render: () => <ValidationDemo />,
};
