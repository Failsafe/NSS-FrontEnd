Testing Automation
====

## Agenda

* Basic introduction to Node.js
  * Server-side JavaScript... but why?
      * Speed (Google's V8 engine)
      * Asynchronicity / Non-blocking (event driven)
      * The event loop
  * Browser-less (no window, no document)
  * The package.json file
      * Installing dependencies
      * Adding dependencies with --save-dev
      * Ignoring node_modules in git
  * Running a node application

* Task automation with Grunt
  * What is Grunt?
      * Why use it versus other build/automation tools?
      * Plugins
  * The Gruntfile.js configuration
      * Tasks and targets and options, oh my
      * Registering tasks
      * Custom tasks (briefly)

* Running Tests with Grunt
  * qunit plugin options (urls, timeout, force)
  * PhantomJS
      * What is it and why do we need it?
      * Things to watch out for
  * Running tests in a local web server
  * Debugging test output

* Automating test running with Grunt & the watch task
  * Watching files
  * Using different targets for different tasks

* Other tasks
  * jshint
  * haml
      * Using a distribution folder
  * copy
  * clean
  * compass

* Cross-browser testing tools (demo)

## Examples

All testing examples were taken from the [NSS-FrontEnd repository](https://github.com/chyld/NSS-FrontEnd/tree/master/2013-10-17-Calc-Integration-Testing), specifically, the work from 10/17 on the Calculator app.

