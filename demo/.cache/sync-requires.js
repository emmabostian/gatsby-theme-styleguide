const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---theme-src-templates-default-js": hot(preferDefault(require("/Users/ebostian/Desktop/gatsby-styleguide/theme/src/templates/default.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ebostian/Desktop/gatsby-styleguide/demo/.cache/dev-404-page.js")))
}

