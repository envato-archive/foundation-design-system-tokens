const gulp = require('gulp')
const theo = require('theo')
const Color = require('color')
const _ = require('lodash')

theo.registerFormat('scss', (json, options) => {
  return json.propKeys.map(key => {
    var prop = json.props[key]
    if (prop.type === 'color') {
      prop.value = Color(prop.value).hslString()
    }
    if (prop.type === 'glyph') {
      prop.value = JSON.stringify(prop.value)
    }
    return `$${prop.name}: ${prop.value};`
  }).join('\n')
})

theo.registerFormat('sass', (json, options) => {
  return json.propKeys.map(key => {
    var prop = json.props[key]
    if (prop.type === 'color') {
      prop.value = Color(prop.value).hslString()
    }
    if (prop.type === 'glyph') {
      prop.value = JSON.stringify(prop.value)
    }
    return `$${prop.name}: ${prop.value}`
  }).join('\n')
})

theo.registerFormat('css', (json, options) => {
  return json.propKeys.map(key => {
    var prop = json.props[key]
    if (prop.type === 'color') {
      prop.value = Color(prop.value).hslString()
    }
    if (prop.type === 'glyph') {
      prop.value = JSON.stringify(prop.value)
    }
    return `$${prop.name}: ${prop.value};`
  }).join('\n')
})

theo.registerFormat('js', (json) => {
  var values = _.map(json.props, prop => {
    var name = prop.name
    var value = prop.value
    if (prop.type === 'color') {
      value = Color(value).hslString()
    }
    switch (typeof value) {
      case 'string':
      default:
        value = `${JSON.stringify(value)}`
    }
    return `"${name}": ${value},`
  }).join('\n  ').replace(/,$/, '')
  var output = `module.exports = {
  ${values}
};
  `
  return output
})

gulp.task('scss', () => {
  return gulp.src('index.yml')
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('scss'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('sass', () => {
  return gulp.src('index.yml')
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('sass'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('post-css', () => {
  return gulp.src('index.yml')
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('js', () => {
  return gulp.src('index.yml')
    .pipe(theo.plugins.transform('web'))
    .pipe(theo.plugins.format('js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['scss', 'sass', 'post-css', 'js'])
