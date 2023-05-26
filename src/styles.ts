import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaclaro: '#FFEBD9',
  branco: '#F5F5F5'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.rosa};
  }

  .container {
    max-width: 2032px;
    width: 100%;
    margin: 0 auto;
  }
`
