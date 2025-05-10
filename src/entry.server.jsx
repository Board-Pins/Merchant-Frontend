import { type HandleErrorFunction } from "react-router-dom";

export const handleError = (error, { request }) => {
  // Don't log aborted requests
  if (!request.signal.aborted) {
    console.error("Server error:", error);
    
    // You could add error reporting service here
    // sendToErrorReportingService(error);
  }
  
  // Return a fallback UI for critical errors
  return {
    status: 500,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
      <html>
        <head><title>Something went wrong</title></head>
        <body>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;">
            <h1>Something went wrong</h1>
            <p>We're having trouble loading the application. Please try refreshing the page.</p>
            <button onclick="window.location.href='/'">Go to Home</button>
          </div>
        </body>
      </html>
    `,
  };
};
