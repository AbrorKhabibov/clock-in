# Mobile App Documentation

## Overview

The Clock-In mobile app is built with React Native and Expo, providing a cross-platform solution for iOS and Android.

## Features

- **Authentication**: Login/logout functionality
- **Clock In/Out**: Manual time tracking
- **NFC Scanning**: Clock in/out using NFC tags
- **Schedules**: View weekly work schedules
- **Profile**: View and manage user profile

## Setup

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Expo CLI
- iOS Simulator (Mac) or Android Studio

### Installation

1. Navigate to the mobile app directory:

```bash
cd apps/mobile
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` with your backend API URL.

### Running the App

Start the Expo development server:

```bash
pnpm dev
```

Then press:

- `i` to open iOS simulator
- `a` to open Android emulator
- Scan QR code with Expo Go app on your device

## NFC Setup

### iOS

1. NFC is only available on iPhone 7 and newer
2. Ensure NFC capability is enabled in your app's entitlements
3. The app will request NFC permission on first use

### Android

1. NFC must be enabled in device settings
2. The app requires NFC permission in AndroidManifest.xml
3. NFC scanning works when the app is in the foreground

## Project Structure

```
apps/mobile/
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── home.tsx       # Home/clock in screen
│   │   ├── schedules.tsx  # Schedules screen
│   │   └── profile.tsx    # Profile screen
│   ├── auth/              # Auth screens
│   │   └── login.tsx      # Login screen
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Entry point
├── components/            # Reusable components
├── hooks/                 # Custom React hooks
├── services/              # API and NFC services
│   └── nfc.service.ts    # NFC functionality
└── assets/               # Images, fonts, etc.
```

## Building for Production

### iOS

```bash
pnpm build:ios
```

### Android

```bash
pnpm build:android
```

## Testing on Physical Devices

### iOS

1. Install Expo Go from the App Store
2. Scan the QR code from the Expo dev server
3. Note: NFC requires a physical device (not simulator)

### Android

1. Install Expo Go from the Play Store
2. Scan the QR code from the Expo dev server
3. Enable NFC in device settings for NFC features
