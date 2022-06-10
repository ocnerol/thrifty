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
