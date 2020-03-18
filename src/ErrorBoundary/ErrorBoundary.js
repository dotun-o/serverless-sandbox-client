import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[ERROR] Error rendering component", error, errorInfo);
  }

  render() {
    const errorMessage = <div>There was an error.</div>

    return this.state.hasError ? errorMessage : this.props.children;
  }
}
