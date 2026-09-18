import React from 'react';
import { ShieldAlert, RefreshCw, Home, Phone } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log safe diagnostic information
    console.error('Application Error Caught by Boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl mx-auto flex items-center justify-center border border-red-200">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">
                Something went wrong
              </h2>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                An unexpected system glitch occurred. Our team has been notified. You can refresh or return to the homepage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#166B82] hover:bg-[#0F5265] text-white font-extrabold text-xs rounded-xl shadow-md transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <button
                onClick={this.handleHome}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl border border-slate-200 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href="tel:7802077444"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#166B82] hover:underline"
              >
                <Phone className="w-3 h-3" />
                <span>Need immediate support? Call +91 78020 77444</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
