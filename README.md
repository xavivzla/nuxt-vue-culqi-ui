# NUXT VUE-CULQI-UI

> Plugin to join nuxt and [vue-material](https://github.com/xavivzla/culqi-ui) framework.

## Setup
- Add `nuxt-vue-culqi-ui` dependency using npm to your project
- Add `nuxt-vue-culqi-ui` to `modules` section of `nuxt.config.js`
```js
{
  modules: [
    ['nuxt-vue-culqi-ui', {
      theme: 'default-dark',
      components: ['MdDrawer', 'MdRadio', 'MdMenu', 'MdContent', 'MdList', 'MdButton', 'MdToolbar',]
    }],
  ]
}
```

## Module options

### `css`
- Default: `true`
Adds `vue-culqi-ui.min.css` and `theme` css to the start of `options.css[]`

### `theme`
Sets vue-culqi-ui theme
- Default: `default`
- Options: `default`, `default-dark`, `black-green-dark`, `black-green-light`
<br/>
Pass `null` to disable theme in case you're going to use custom one

### `components`
Load only selected components. Will load all framework if empty
- Default: `[]`

## Changelog
[Release Notes](./CHANGELOG.md)
