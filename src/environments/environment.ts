// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
 
  firebase:{
    apiKey: "AIzaSyAKG1l47aV_PyyE2Y7K7xUenbveucGJjnU",
    authDomain: "northwinds-angular.firebaseapp.com",
    databaseURL: "https://northwinds-angular.firebaseio.com",
    projectId: "northwinds-angular",
    storageBucket: "northwinds-angular.appspot.com",
    messagingSenderId: "25105181633"
  }
};
