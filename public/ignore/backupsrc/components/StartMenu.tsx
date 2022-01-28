import { Container, VStack } from '@chakra-ui/react'

const StartMenu = () => {

    return (
        <VStack>
  <Container maxW='container.xl'>Extra-Large Container</Container>
  <Container maxW='container.lg'>Large Container</Container>
  <Container maxW='container.md'>Medium Container</Container>
  <Container maxW='container.sm'>Small Container</Container>
</VStack>
    )

}

export default StartMenu