import React from 'react'
import { theme, ThemeConfig, DocPreview } from 'docz'
import { ThemeProvider } from 'emotion-theming'
import * as components from './components'
import Sidebar from './components/sidebar'

const Theme = () => (
  <ThemeConfig>
    {config => (
      <ThemeProvider theme={config}>
        <Sidebar />
        <DocPreview
          components={{
            page: components.Page,
            // loading: components.Loading,
            // h1: components.H1,
            // h2: components.H2,
            // h3: components.H3,
            // h4: components.H4,
            // h5: components.H5,
            // h6: components.H6,
            // hr: components.Hr,
            // img: components.Image,
            // ul: components.List,
            // pre: components.Pre,
            // inlineCode: components.Code,
            // blockquote: components.Blockquote,
          }}
        />
      </ThemeProvider>
    )}
  </ThemeConfig>
)

const themeConfig = {
  colors: {
    primary: 'tomato',
    secondary: 'khaki',
    gray: 'lightslategray'
  }
}

export default theme(themeConfig)(Theme)
