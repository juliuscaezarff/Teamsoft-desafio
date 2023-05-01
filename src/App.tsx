import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Container } from './styles'

import { Header } from './components/Header'

import { Description } from './layouts/Description'
import { Selectedmenu } from './layouts/SelectedMenu'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <div>
        <Header />

        <Container>
          <Description />
          <Selectedmenu />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
