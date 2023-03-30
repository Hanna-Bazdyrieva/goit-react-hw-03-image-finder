import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import App from 'components/App';
import './index.css';




export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // console.log("error :>> ", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {

      return (
        <>
          <h1>So sad... Error happened...</h1>
        </>
      );
    }

    return this.props.children;
  }
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ErrorBoundary>
//       <App />
//     </ErrorBoundary>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);