import {
  ChakraProvider,
  Grid,
  theme,
} from "@chakra-ui/react"
import Game from './containers/GameHolder'
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>

      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end"/>
          <Game/>
      </Grid>
  </ChakraProvider>
)
