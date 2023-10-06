import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'app-demo',
  webDir: 'dist/app-demo',
  server: {
    androidScheme: 'https'
  }
};

export default config;
