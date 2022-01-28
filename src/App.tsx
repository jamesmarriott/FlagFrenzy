import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Game from './containers/GameHolder'
import HeaderContain from "./components/Header"


export const App = () => (
  <ChakraProvider theme={theme}>
    <HeaderContain/>
    <Game/>
  </ChakraProvider>
)
