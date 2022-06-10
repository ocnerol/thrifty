import { Constants } from 'expo-constants';

import { DEV_IP } from '@env';

const settings = {
  dev: {
    apiUrl: `http://${DEV_IP}:9000/api`,
  },
  staging: {
    apiUrl: `http://${DEV_IP}:9000/api`,
  },
  prod: {
    apiUrl: `http://${DEV_IP}:9000/api`,
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
