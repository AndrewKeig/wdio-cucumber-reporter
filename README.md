# WDIO cucumber reporter

[![build status](https://travis-ci.org/AndrewKeig/wdio-cucumber-reporter.svg?branch=master)](http://travis-ci.org/AndrewKeig/wdio-cucumber-reporter)
==========

> A WebdriverIO plugin to report in cucumber style, WIP.

## Installation

The easiest way is to keep `wdio-cucumber-reporter` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "wdio-cucumber-reporter": "~0.0.x"
  }
}
```

You can simple do it by:

```bash
npm install wdio-cucumber-reporter --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here](http://webdriver.io/guide/getstarted/install.html).

## Configuration

Following code shows the default wdio test runner configuration. Just add `'cucumber'` as reporter
to the array.

```js
// wdio.conf.js
module.exports = {
  // ...
  reporters: ['cucumber'],
  // ...
};
```

----

For more information on WebdriverIO see the [homepage](http://webdriver.io).
