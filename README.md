## Get up and running

```
$ npm install -g lazy-generator
```

Or clone this project to your local then run

```
$ npm install -g
$ npm link
```

Usage: `$ generator <type> <name> [dest]`


  Options:

    -h, --help  output usage information

    type  'component' or 'directive'

    name  should be in camelCase

    dest  by default it is `src/app/shared/components/`

### Example
```
$ generator component datePick
```
This will create a new folder `src/app/shared/components/datePick`
