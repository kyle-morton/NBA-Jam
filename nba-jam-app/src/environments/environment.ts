// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    auth: 'a21vcnRvbjU3NzA6bDk3SVFeckl2NWJQ',
    base: 'https://api.mysportsfeeds.com/v1.2/pull/nba/',
    active_players: '/active_players.json',
    team_standings: '/overall_team_standings.json'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
