import type { PropsWithChildren } from "react";
import { Component } from "react";

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <main role="alert">The diagnostic interface could not render.</main>;
    }
    return this.props.children;
  }
}
