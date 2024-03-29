# Coding & Cocktails Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

To get going
```bash
git clone
npm install
npm start
```

To serve app and auto open browser use `ng serve` or `npm start`

# How to activate links, update mentors, etc
All data used to populate app is found in "src/data" folder. Update toolset and venue in _about.ts_, update leadershipe & mentor in _heroes.ts_, and update session info in _sessions.ts_.

* To activate links for a session, enable the `areLinksEnabled` flag for the session.
* To display next session's ticket purchasing view:
    1. Make sure the session's `eventbriteIFrameLink` is populated
    1. Set the `UPCOMING_SESSION_MONTH` for the session to display using the integer representation for the month (ie 7 for July)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
We have tests. Please run them when making non-session changes.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
