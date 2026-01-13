// Centralized API configuration
// Uses environment variables with sensible defaults for development

/**
 * API Configuration
 * 
 * In development: Set VITE_API_BASE_URL in .env.local
 * In production: Set VITE_API_BASE_URL in your hosting platform's environment variables
 * 
 * Example .env.local:
 * VITE_API_BASE_URL=http://localhost:3001/
 */

// Get the API base URL from environment variable
// Falls back to localhost for development if not set
const getApiBaseUrl = (): string => {
    const envUrl = import.meta.env.VITE_API_BASE_URL;

    if (envUrl) {
        // Ensure URL ends with a trailing slash
        return envUrl.endsWith('/') ? envUrl : `${envUrl}/`;
    }

    // Development fallback
    if (import.meta.env.DEV) {
        return 'http://localhost:3001/';
    }

    // Production fallback - should be set via environment variable
    // This ensures the app doesn't break if env var is missing
    console.warn('VITE_API_BASE_URL is not set. Please configure it in your environment variables.');
    return 'http://localhost:3001/';
};

export const API_BASE_URL = getApiBaseUrl();

// Log the configuration in development mode only
if (import.meta.env.DEV) {
    console.log('API Configuration:', {
        API_BASE_URL,
        source: import.meta.env.VITE_API_BASE_URL ? 'environment variable' : 'fallback'
    });
}
