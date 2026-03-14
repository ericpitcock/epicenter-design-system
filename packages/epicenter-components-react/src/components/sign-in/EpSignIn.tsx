import React, { forwardRef, useState, FormEvent } from 'react';

import { EpButton } from '../button/EpButton';
import { EpContainer } from '../container/EpContainer';
import { EpInput } from '../input/EpInput';
import { EpLoadingState } from '../loading-state/EpLoadingState';
import { EpicenterLogo } from '../logo/EpicenterLogo';

type SignInState = 'signin' | 'loading' | 'message' | 'reset';

// Placeholder icon - replace with actual icon when available
const Eye = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export interface EpSignInProps {
  [key: string]: unknown;
  className?: string;
  containerProps?: React.ComponentProps<typeof EpContainer>;
  onReset?: (email: string) => void;
  onSignIn?: (email: string, password: string) => void;
}

export const EpSignIn = forwardRef<HTMLDivElement, EpSignInProps>(
  ({ onSignIn, onReset, containerProps = {}, className = '', ...props }, ref) => {
    const [state, setState] = useState<SignInState>('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('Signing in…');

    const buttonLabel =
      state === 'reset'
        ? 'Send password reset email'
        : state === 'loading'
        ? 'Signing in…'
        : 'Sign in';

    const footerText =
      state === 'reset' ? 'Back to sign in' : 'Forgot your password?';

    const handleButtonClick = (e: FormEvent) => {
      e.preventDefault();

      if (state === 'reset') {
        // Handle password reset
        onReset?.(email);
        return;
      }

      // Simulate loading state
      setState('loading');
      setLoadingMessage('Signing in…');

      // Simulate async sign-in
      setTimeout(() => {
        setState('signin');
        onSignIn?.(email, password);
      }, 1500);
    };

    const handleFooterClick = () => {
      if (state === 'reset') {
        setState('signin');
      } else {
        setState('reset');
      }
    };

    const renderContent = () => {
      if (state === 'loading') {
        return (
          <div className="ep-sign-in__form__message">
            <EpLoadingState
              message={{
                icon: 'oval',
                message: loadingMessage,
              }}
            />
          </div>
        );
      }

      if (state === 'message') {
        return (
          <div className="ep-sign-in__form__message">
            <p>Check your email for a password reset link</p>
          </div>
        );
      }

      return (
        <form>
          <EpInput
            id="email"
            value={email}
            onChange={setEmail}
            type="email"
            size="xlarge"
            placeholder="Email"
            data-1p-ignore
            onClear={() => setEmail('')}
          />
          {state !== 'reset' && (
            <EpInput
              id="password"
              value={password}
              onChange={setPassword}
              type="password"
              size="xlarge"
              placeholder="Password"
              iconRight={<Eye />}
              data-1p-ignore
              onClear={() => setPassword('')}
            />
          )}
          <EpButton
            className="ep-button-var--primary"
            type="submit"
            size="large"
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </EpButton>
        </form>
      );
    };

    return (
      <div ref={ref} className={`ep-sign-in ${className}`.trim()} {...props}>
        <EpContainer
          {...containerProps}
          header={
            <div className="ep-sign-in__header">
              <EpicenterLogo width="140px" />
            </div>
          }
          footer={
            <div className="ep-sign-in__footer">
              <p className="text--link" onClick={handleFooterClick}>
                {footerText}
              </p>
            </div>
          }
        >
          <div className="ep-sign-in__form">{renderContent()}</div>
        </EpContainer>
      </div>
    );
  }
);

EpSignIn.displayName = 'EpSignIn';
