# Foundation Design System tokens
This is a monorepo for all Envato foundation design system tokens build with `lerna.js`.

### Usage
To install all the tokens from design system

```sh
$ npm i foundation-design-system-tokens
```

To only install the `colors` from the design system

```sh
$ npm i foundation-design-system-tokens-colors
```

Each package include a `.css`, `.js`, `.sass`, `.scss` you can import in your project.

```js
import('foundation-design-system-tokens-colors/dist/')
```

or

```css
@import "foundation-design-system-tokens-colors/dist/index.css";
```

### Development
Make sure you have `lerna.js` installed globally by `npm install --global lerna@^2.0.0-beta`

To install all dependencies for all packages.

```sh
$ lerna bootstrap
```

To build target style files from tokens.

```sh
$ lerna run build
```

### Publish pacakge(s) to NPM

To publish a version for all packages

```sh
$ lerna publish
```

**Note:** When you make changes to one of the packages, Lerna.js will auto detect which version has been updated and only prompt you to bump the version of that particular packages.

To publish a `beta` version for packages

```sh
$ lerna publish --npm-tag=beta
```

### License
MIT
