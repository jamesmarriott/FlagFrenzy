import {
  ChakraProvider,
} from "@chakra-ui/react"
import Game from './containers/GameHolder'
import "@fontsource/quicksand"

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: 'Quicksand',
  },
})


export const App = () => (
  <ChakraProvider theme={theme}>
    <Game/>
  </ChakraProvider>
)
