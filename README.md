
# stylus-requires

  Simple require parser for
  [Stylus](http://learnboost.github.io/stylus/) files. Made only to quickly
  resolve paths in strings containing `@require`.

  Modified from [TJ's original](https://github.com/visionmedia/node-requires).

## Installation

```
$ npm install stylus-requires
```

## Example

stylus:

```stylus
@require './a.styl'
@require './something/here/whoop'
@require "something"
```

parser output:

```stylus
[
  {
    "string": "@require './a.styl'",
    "path": "./a.styl",
    "index": 0
  },
  {
    "string": "@require './something/here/whoop'",
    "path": "./something/here/whoop",
    "index": 20
  },
  {
    "string": "@require \"something\"",
    "path": "something",
    "index": 54
  }
]
```

# License

  MIT
