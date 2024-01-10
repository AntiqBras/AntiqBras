export const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL
