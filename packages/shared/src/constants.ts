// API Routes
export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
  },
  COMPANIES: {
    BASE: '/companies',
    BY_ID: (id: string) => `/companies/${id}`,
  },
  SCHEDULES: {
    BASE: '/schedules',
    BY_ID: (id: string) => `/schedules/${id}`,
    BY_USER: (userId: string) => `/schedules/user/${userId}`,
  },
  TIME_LOGS: {
    BASE: '/time-logs',
    BY_ID: (id: string) => `/time-logs/${id}`,
    CLOCK_IN: '/time-logs/clock-in',
    CLOCK_OUT: '/time-logs/clock-out',
    BY_USER: (userId: string) => `/time-logs/user/${userId}`,
  },
  NFC_TAGS: {
    BASE: '/nfc-tags',
    BY_ID: (id: string) => `/nfc-tags/${id}`,
    VERIFY: '/nfc-tags/verify',
  },
} as const;

// Time formats
export const TIME_FORMATS = {
  TIME_12H: 'hh:mm A',
  TIME_24H: 'HH:mm',
  DATE: 'YYYY-MM-DD',
  DATETIME: 'YYYY-MM-DD HH:mm:ss',
} as const;

// Default values
export const DEFAULT_VALUES = {
  PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  TOKEN_EXPIRY: '15m',
  REFRESH_TOKEN_EXPIRY: '7d',
} as const;

// Days of week
export const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;
