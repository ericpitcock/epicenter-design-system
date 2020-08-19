const svgIconsReq = require.context('!!raw-loader!./icons', true, /.\.svg$/)
const svgIcons = svgIconsReq.keys().map(name => ({ name, content: svgIconsReq(name).default }))
export default svgIcons