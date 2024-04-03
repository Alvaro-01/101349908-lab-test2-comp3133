import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Import the appRoutes array from './app.routes'
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Define the array of providers
const appProviders = [
  provideClientHydration(),
  provideAnimationsAsync(),
  provideRouter(appRoutes) // Provide the appRoutes array to provideRouter
];

export const appConfig = {
  providers: appProviders // Use appProviders directly
};

@NgModule({
  providers: appProviders // Use appProviders directly
})
export class AppConfigModule { }
