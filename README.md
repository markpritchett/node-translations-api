# Node Translations API

## What is it?
A *really* simple [node](https://nodejs.org) translation API service demo app.

Translations are stored in language-specific json files as key / value pairs:  

The values can be as simple as:

``` json
key: "foo",
value: "bar"
```

or more complex like:

``` json
key: "baz",
value: {
    "someField": "someValue",
    "anotherField": "anotherValue"
}
```

## Usage

Crack open a terminal and run:

``` JavaScript
node index.js
```

Open a browser and try different URLs:

```
// For a basic message in English
http://localhost:4000/?lang=en&key=welcome_message

// For a basic message in French
http://localhost:4000/?lang=fr&key=welcome_message

// For an object in English
http://localhost:4000/?lang=en&key=login_component

// For an object in French
http://localhost:4000/?lang=fr&key=login_component
```

## Hacking

Look at the [src](index.js) if you want to extend / modify it :smiley: