import { Button, Text, Center, ButtonProps, useBreakpointValue } from '@chakra-ui/react'
import { Box, BoxProps } from '@chakra-ui/layout'
import { motion } from 'framer-motion'

export const MotionBox = motion<BoxProps>(Box)
export const MotionButton = motion<ButtonProps>(Button)

const buttonVariants = {
  
  hover: {
    scale: 1.1,
    background: "blue",
    transition: {
      duration: 0.3,
      yoyo: 5
    }
  }
}

const containerVariants = {
  hidden: { 
    y: "-100vh",
    transition: { ease: 'easeInOut' }
  },
  visible: { 
    y: "0",
    transition: { duration: .6 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'bounce' }
  }
};

type Props = {
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    countdown: number;
    countstart: boolean;
}

const StartMenu: React.FC<Props> = ({
    callback,
    countdown,
    countstart
}) => {

    return (
      <Center>
          <MotionBox 
          p={[2,4,10]}
          display='grid'
          gap={8}
          variants={containerVariants}
           initial="hidden"
          animate="visible"
          exit="exit"
          >
            <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' })}>
            🏁Flag Frenzy🏁
          </Text>
          <Text
            color={'white'}
            fontWeight={400}
            lineHeight={2}
            fontSize={useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' })}
            >
            How many flags do you know?
          </Text>
            <MotionButton
            p={[2,4,8]}
            border={"2px solid white"}
            _hover={{
              background: "transparent",
            }}
            borderRadius="full"
            color={'white'}
            bg={'transparent'}
            variants={buttonVariants} 
            fontSize={useBreakpointValue({ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl'})}
            onClick={callback}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              {!countstart ? 'Start' : `${countdown}`}</MotionButton>
          </MotionBox>
          </Center>
    )
}

export default StartMenu

