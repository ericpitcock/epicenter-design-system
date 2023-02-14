/* To dynamically import all components with a .vue extension from the components directory,
you can use the require.context function in Webpack. Here's an example of how to use it:
*/

const files = require.context('./src/components', true, /\.vue$/i)
const components = {}

files.keys().forEach(key => {
  const name = key.match(/([^/]+)\.vue$/i)[1]
  components[name] = files(key).default || files(key)
})

export default components

/*
In this example, we're using require.context to get a list of all files in the ./components directory that end with .vue.
We then loop through the list of files, extract the component name from the file path, and add the component to the components object.
Note that the default property is used here in case the component is exported as the default export (e.g., export default { ...}).
If the component is not exported as the default export, we use the module itself (i.e., files(key)).
Once you have this components object, you can use it to register your components globally or locally in your Vue app.
Here's an example of how to register your components globally:
*/

// import Vue from 'vue'
// import components from './components'

// Object.keys(components).forEach(name => {
//   Vue.component(name, components[name])
// })

// This will register all of your components globally so they can be used in any Vue component in your app.
// Alternatively, you can register your components locally in a specific Vue component:

// import components from './components'

// export default {
//   components,
//   // ...
// }

// try to use the components in the template of the component:
// import { Button, Input, Select } from '@ericpitcock/vue-components';
