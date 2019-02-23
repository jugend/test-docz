export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button" */ 'src/components/Button.mdx'),
}
