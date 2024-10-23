import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.gallery',
  appName: 'gallery',
  webDir: 'dist',

  plugins: {
    LiveUpdates: {
      appId: 'ff4aeb1f',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
