import { useBreakpointValue } from '@chakra-ui/react'
import { Box, Text, Flex, Spacer } from '@chakra-ui/react'

const HeaderContain = () => {

    return (
        <Flex >
        <Box
        pos="relative"
        minW="100vw"
        _before={{
          content: '""',
          bgImage:
            "flagsbg.jpg",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.5,
          zIndex: -1
        }}>

        <Box
        p={[1,2,4]}
        bgGradient={'linear(to-b, whiteAlpha.600, whiteAlpha.700)'}
        w='full'
        align='center'
        >
          <Text
            color={'black'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' })}>
            🏁Flag Frenzy🏁
          </Text>
          <Spacer/>
          <Text
            color={'black'}
            fontWeight={400}
            lineHeight={2}
            fontSize={useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' })}
            >
            How many flags do you know?
          </Text>
          </Box>
        </Box>
        </Flex>
    )
}

export default HeaderContain