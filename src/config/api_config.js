import Config from 'react-native-config';

console.log(Config);

export const config = {
  API_URL: Config.API_URL,
  AWS_BUCKET_URL: Config.BUCKET_URL,
};
