import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.503fa7136890428c8b19dd2836d790b2',
  appName: 'guard-wise',
  webDir: 'dist',
  server: {
    url: 'https://503fa713-6890-428c-8b19-dd2836d790b2.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1a1a2e',
      showSpinner: true,
      spinnerColor: '#6366f1'
    },
    StatusBar: {
      style: 'dark'
    }
  }
};

export default config;