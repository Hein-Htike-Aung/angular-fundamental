// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url: 'https://parseapi.back4app.com',
    header: {
      appId: {
        key: 'X-Parse-Application-Id',
        value: 'saZQMWNt9JFxHgxRdgmJXu2oudEbyeQRCWiHy8b0',
      },
      apiKey: {
        key: 'X-Parse-REST-API-Key',
        value: 'IWEot7U7QDQ9Kz6itaoy2VhnoFDG9bktYW9vUvAu',
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
