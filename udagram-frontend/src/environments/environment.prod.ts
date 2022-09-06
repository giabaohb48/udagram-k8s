// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var external_ip = process.env.EXTERNAL_IP

export const environment = {
  production: false,
  appName: 'Udagram',
  // apiHost: 'http://a1db60444b96e4dd58398ba2b9032982-2034613595.ap-southeast-1.elb.amazonaws.com:8080/api/v0'
  apiHost: external_ip + ':8080/api/v0'

};


/* hahahahahaha*/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
