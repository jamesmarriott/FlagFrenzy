import { Box, Text, Container, useBreakpointValue} from '@chakra-ui/react'

type Props = {
    time: number;
}

const Timer: React.FC<Props> = ({ time }) => {

    return (
    <Container maxW="container.xl" p={[1,2,4]} bg={'gray.300'} boxShadow='xl' rounded='md' border="2px" borderColor="gray.500">
    <Box>
        <Text fontSize={useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl'})}>
        Time: {(Math.floor((time / 1000)))}.{("0" + Math.floor((time / 100))).slice(-1)}s</Text>
    </Box>
    </Container>
    )
}

export default Timer