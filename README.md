# icuify

A browserify transformer to convert ICU bundles into JSON.

## Usage

ICUify will use the icu-converter tool to convert your resource bundles into JSON formats. A simple example is:

```
browserify -t [ icuify --ext=.txt ] strings/en/messages.txt
```

However you can also directly include the resource bundle in your JS code:

```javascript
# test.js
var msgs = require('strings/en/messages.txt');
console.log(msgs);
```

```
$ browserify -t [ icuify --ext=.txt ] test.js
```

If you have multiple resource bundles (for example, different languages), then you can use the require-globify transformer to make your life easy.

Say you have a directory structure like this:

```
strings/en/messages.txt
strings/fr/messages.txt
```

Using the require-globify tool you can do the following in your js code:

```javascript
# test.js
var msgs = require('strings/**/*.txt', { expand: 'hash' });
console.log(msgs);
```

Then run browserify like so:

```
$ browserify -t [ icuify --ext=.txt ] -t [ require-globify ] test.js > bundle.js
$ node bundle.js
```

You will then see output similar to:

```javascript
{
    "en/messsages": {
        "root": {
            "hello": "Hello"
        }
    },
    "fr/messages": {
        "root": {
            "hello": "Bon Jour"
        }
    }
}
```

The JSON that is created can be used on its own, however if you want to use the pluralization/gender/etc features of the ICU format, you'll have to use another tool that will process them. Recommended is the excellent MessageFormat tool available at: https://github.com/messageformat/messageformat.js

## Examples

There are two basic examples showing single and multi file usage. Both projects are built using Grunt. To run either one do the following:

```
$ npm install
$ grunt
$ node cli.js
```


