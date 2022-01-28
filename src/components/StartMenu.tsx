import { Box, BoxProps, Button, Text, Center, ButtonProps, TextProps, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionBox = motion<BoxProps>(Box)
export const MotionButton = motion<ButtonProps>(Button)
export const MotionText = motion<TextProps>(Text)

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
    opacity: 0,
    x: '100vw'
  },
  visible: { 
    opacity: 1,
    x: 0
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
      <Center
      minH={"100vh"}
      >
          <MotionBox 
          p={[2,4,10]}
          display='grid'
          gap={8}
          >
            <MotionText
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            fontSize={useBreakpointValue({ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' })}>
            🏁Flag Frenzy🏁
          </MotionText>
          <MotionText
            color={'white'}
            fontWeight={400}
            lineHeight={2}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: '1.5'}}
            fontSize={useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' })}
            >
            How many flags do you know?
           </MotionText>
            <MotionButton
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: '1.5'}}
            p={[2,4,8]}
            border={"2px solid white"}
            _hover={{
              background: "transparent",
            }}
            _active={{
              background: "transparent",
            }}
            _focus={{
              background: "transparent",
            }}
            borderRadius="full"
            color={'white'}
            disabled={!countstart ? false : true}
            variant='outline'
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

