# [JSDoc](http://usejsdoc.org/) plugin that adds support for Riot tag files

Compiles Riot tag files before they are processed by JSDoc

## Installion

The ``` jsdoc-riot ``` plugin can by installed using NPM.

```bash
npm install --save-dev jsdoc-riot
```

## Usage:

To use the plugin include the plugin module in the ``` plugins ``` array of [JSDoc's configuration file](http://usejsdoc.org/about-configuring-jsdoc.html)

```json
{
  "plugins": ["jsdoc-riot"],
  "source": {
        "includePattern": ".+\\.js|tag(doc)?$"
  }
}
```

## Contributing:

Feel free to open issues to propose stuff and participate. Pull requests are also welcome.

## Release History

* 0.1.0 Initial release

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
