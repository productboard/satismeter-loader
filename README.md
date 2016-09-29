# satismeter-loader

This is the [SatisMeter snippet](https://www.satismeter.com) *slightly* modified to be a commonJS compatible module.

It's usable with module loaders like [browserify](http://browserify.org/) or [webpack](http://webpack.github.io/docs/).

## Install

```shell
npm install satismeter-loader --save
```

## Usage

```js
var satismeter = require('satismeter-loader');

satismeter({
  writeKey: 'YOUR_WRITE_KEY',
  userId: '007',
  traits: {
    name: 'James Bond',
    licence: 'to kill',
    drink: 'Vesper Martini'
  }
});
```
