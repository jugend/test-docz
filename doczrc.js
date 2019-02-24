import images from 'remark-images'
import emoji from 'remark-emoji'
// import link from 'remark-external-links'

const plugins = [images, emoji]

export default {
  // title: 'Test Component Documentation',
  // description: 'This is my awesome documentation',
  theme: 'src/custom-theme',
  // themeConfig: {
  //   colors: {
  //     primary: 'tomato'
  //   },
  //   styles: {
  //     body: {
  //       fontSize: 12,
  //       backgroundColor: blue
  //     }
  //   }
  // },
  // modifyBundlerConfig: config => {},
  mdPlugins: plugins
}
