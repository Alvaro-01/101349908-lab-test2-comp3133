import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // Import appConfig from './app.config'

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

// Merge providers from appConfig and serverConfig
const allProviders = [
  ...appConfig.providers, // Include providers from appConfig
  ...serverConfig.providers // Include providers from serverConfig
];

export const config = mergeApplicationConfig(appConfig, { providers: allProviders });
