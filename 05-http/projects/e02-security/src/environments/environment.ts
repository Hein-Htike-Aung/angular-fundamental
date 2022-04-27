// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url: 'https://parseapi.back4app.com',
    apiID: {
      key: 'X-Parse-Application-Id',
      value: 'Q8ojKIVWfw5S1kkZ2gRSxP20pMRbBPKm5eRvSQC2',
    },
    apiKey: {
      key: 'X-Parse-REST-API-Key',
      value: 'g3t8WGMvRC4sKoU8H7CzVIup3RpkbqOpHQZcUuKi',
    },
    sessionToken: {
      key: 'X-Parse-Session-Token',
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
