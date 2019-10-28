# Lazy Generator

## Get up and running

```
$ npm install -g lazy-generator
```

Or clone this project to your local then run

```
$ git clone git@github.com:mrhieu/generator.git && cd generator
$ npm install -g
$ npm link
```

## Usage

```
$ generator <type> <name> [dest]
```

  Options:

    -h, --help  output usage information

    type  'component' or 'directive' or 'reactComponent'

    name  must be in camelCase

    dest  by default it is `src/app/shared/components/` or `src/app/shared/reactWrappers/`


## Example

### AngularJS Component

```
$ generator angularjs component datePick
```

This will create a new folder `src/app/shared/components/datePick`

### React Component

```
$ generator react component demoThisThat
```

This will create this folder structure

```
src/app/shared
    |--reactComponents
        |--demoThisThat
            |--demoThisThat.jsx
            |--demoThisThat.scss
    |--reactWrappers
        |--demoThisThat
            |--demoThisThatWrapper.component.js
            |--demoThisThatWrapper.ctrl.js
```

To use the component in the View

```
  ...
  <demo-this-that-wrapper></demo-this-that-wrapper>
```

### Ionic React Component
```
$ generator ionicReact component demoThisThat
```
