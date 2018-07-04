# Coding & Cocktails Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

To get going
```bash
git clone
npm install
npm start
```

To serve app and auto open browser use `ng serve --open` or `npm start -- --open`

# How to activate links, update mentors, etc
All data used to populate app is found in _src/data/data.ts_. There are separate arrays for sessions, mentors, leaders, etc.

* To activate links for a session, enable the `areSessionLinksEnabled` flag for the session.
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
TODO: Write tests...

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
