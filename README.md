# Foundation Design System Tokens
Design Tokens are essential particles of a design system, specifically, they are variables that store visual design attributes. They can contain colors (hex, RGBA or other values), sizing units (pixels, rems, etc.) and many more. They're essential for creating and maintaing a consistent visual system.

This is a monorepository for all Envato [Foundation Design System](https://github.com/envato/foundation-design-system) tokens build with `lerna.js`.

| Package | Version |
|--------|-------|
| [`@envato/foundation-design-system-tokens`](/packages/all) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens.svg?maxAge=2592000)](https://www.npmjs.com/package/@envato/foundation-design-system-tokens) |
| [`@envato/foundation-design-system-tokens-colors`](/packages/colors) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-colors.svg?maxAge=2592000)](https://www.npmjs.com/package/@envato/foundation-design-system-tokens-colors) |
| [`@envato/foundation-design-system-tokens-glyphs`](/packages/glyphs) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-glyphs.svg?maxAge=2592000)](https://www.npmjs.com/package/@envato/foundation-design-system-tokens-glyphs) |
| [`@envato/foundation-design-system-tokens-typography`](/packages/typography) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-typography.svg?maxAge=2592000)](https://www.npmjs.com/package/@envato/foundation-design-system-tokens-typography) |
| [`@envato/foundation-design-system-tokens-breakpoints`](/packages/breakpoints) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-breakpoints.svg?maxAge=2592000)](https://www.npmjs.com/package/@envato/foundation-design-system-tokens-breakpoints) |
| [`@envato/foundation-design-system-tokens-spacing`](/packages/spacing) | [![npm](https://img.shields.io/npm/v/foundation-design-system-tokens-spacing.svg?maxAge=2592000)](https://www.npmjs.com/package/@envato/foundation-design-system-tokens-spacing) |

## Usage
To install all the tokens from the Foundation Design System:

```sh
$ npm i @envato/foundation-design-system-tokens
```

To install only the `colors` tokens from the Foundation Design System:

```sh
$ npm i @envato/foundation-design-system-tokens-colors
```

Each package includes a `.css`, `.js`, `.sass`, `.scss` that can be imported in your projects:

```js
import('@envato/foundation-design-system-tokens-colors/')
```

or

```css
@import "@envato/foundation-design-system-tokens-colors/dist/index.css";
```

## Development
Make sure you have `lerna.js` installed globally:

```sh
npm install --global lerna@2.2.0
```

Install dependencies for all packages:

```sh
$ lerna bootstrap
```

To build target style files from tokens run:

```sh
$ lerna run build
```

## Publishing pacakge(s) to NPM

To publish a version for all packages run:

```sh
$ lerna publish
```

**Note:** When you make changes to one of the packages, `lerna.js` will auto detect which version has been updated and only prompt you to bump the version of that particular package.

To publish a `beta` version for packages run:

```sh
$ lerna publish --npm-tag=beta
```

To publish a scoped package as public, you need to add the following into the package.json in each package.

```
"publishConfig": {
  "access": "public"
}
```

## License
MIT
