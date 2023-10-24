import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  // switch app configuration based on environment
  if (process.env.APP_ENV === 'dev') {
    return {
      ...config,
      slug: `DEV - ${config.slug}`,
      name: `DEV - ${config.name}`,
      owner: 'kintin23',
      updates: {
        url: 'https://u.expo.dev/1b6364a6-03ea-464b-9b18-04e217285984',
      },
      ios: {
        ...config.ios,
        bundleIdentifier: 'com.yourcompany.expoboilerplate-dev',
        buildNumber: '1.0.0',
      },
      android: {
        ...config.android,
        package: 'com.yourcompany.expoboilerplate.dev',
        versionCode: 1,
      },
      extra: {
        ...config.extra,
        eas: { projectId: '1b6364a6-03ea-464b-9b18-04e217285984' },
        env: process.env.APP_ENV,
        // add more env variables...
      },
    };
  }

  return {
    ...config,
    slug: config.slug ?? '',
    name: config.name ?? '',
    ios: {
      ...config.ios,
      bundleIdentifier: 'com.yourcompany.expoboilerplate',
      buildNumber: '1.0.0',
    },
    android: {
      ...config.android,
      package: 'com.yourcompany.expoboilerplate',
      versionCode: 1,
    },
    extra: {
      ...config.extra,
      env: 'prod',
    },
  };
};
