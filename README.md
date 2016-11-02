# Foundation Design System Tokens
This is a monorepo for all Envato foundation design system tokens build with `lerna.js`.

| Package | Version |
|--------|-------|
| [`foundation-design-system-tokens`](/packages/all) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens.svg?maxAge=2592000)](https://www.npmjs.com/package/foundation-design-system-tokens) |
| [`foundation-design-system-tokens-colors`](/packages/colors) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-colors.svg?maxAge=2592000)](https://www.npmjs.com/package/foundation-design-system-tokens-colors) |
| [`foundation-design-system-tokens-glyphs`](/packages/glyphs) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-glyphs.svg?maxAge=2592000)](https://www.npmjs.com/package/foundation-design-system-tokens-glyphs) |
| [`foundation-design-system-tokens-typography`](/packages/typography) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-typography.svg?maxAge=2592000)](https://www.npmjs.com/package/foundation-design-system-tokens-typography) |
| [`foundation-design-system-tokens-breakpoints`](/packages/breakpoints) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-breakpoints.svg?maxAge=2592000)](https://www.npmjs.com/package/foundation-design-system-tokens-breakpoints) |
| [`foundation-design-system-tokens-spacing`](/packages/spacing) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-spacing.svg?maxAge=2592000)](https://www.npmjs.com/package/foundation-design-system-tokens-spacing) |

### Usage
To install all the tokens from design system

```sh
$ npm i foundation-design-system-tokens
```

To only install the `colors` token from the design system

```sh
$ npm i foundation-design-system-tokens-colors
```

Each package includes a `.css`, `.js`, `.sass`, `.scss` you can import in your project.

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

**Note:** When you make changes to one of the packages, Lerna.js will auto detect which version has been updated and only prompt you to bump the version of that particular package.

To publish a `beta` version for packages

```sh
$ lerna publish --npm-tag=beta
```

### License
MIT
