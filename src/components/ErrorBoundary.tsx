import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-[#0a1c28] mb-4">
              SMPS Jhansi Website
            </h2>
            <p className="text-gray-600 mb-4">
              The application is loading. Please wait a moment.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-[#466a94] text-white rounded-lg hover:bg-[#f05461] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}