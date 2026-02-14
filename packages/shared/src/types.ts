// User types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE',
}

// Company types
export interface Company {
  id: string;
  name: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schedule types
export interface Schedule {
  id: string;
  userId: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  createdAt: Date;
  updatedAt: Date;
}

// Time Log types
export interface TimeLog {
  id: string;
  userId: string;
  clockIn: Date;
  clockOut?: Date;
  nfcTagId?: string;
  status: TimeLogStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum TimeLogStatus {
  CLOCKED_IN = 'CLOCKED_IN',
  CLOCKED_OUT = 'CLOCKED_OUT',
}

// NFC Tag types
export interface NFCTag {
  id: string;
  tagId: string;
  companyId: string;
  location?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Auth types
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface TokenPayload {
  userId: string;
  email: string;
  role: UserRole;
}
