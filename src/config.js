// Central configuration file for API endpoints
const config = {
  // API URLs
  apiBaseUrl: import.meta.env.VITE_BASE_URL || 'https://api.boardpins.com',
  sspServicesUrl: import.meta.env.VITE_SSP_SERVICES_URL || 'https://api.boardpins.com',
  workspacesUrl: import.meta.env.VITE_WORKSPACES_URL || 'https://api.boardpins.com', // Fixed casing
  
  // Auth endpoints
  googleAuthUrl: `${import.meta.env.VITE_BASE_URL || 'https://api.boardpins.com'}/users-service/auth/google/init/?frontend=provider`,
  
  // Other config values
  isDevelopment: import.meta.env.MODE === 'development',
};

export default config;


