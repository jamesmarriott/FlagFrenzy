import { Box, Text, Button, Tooltip, useBreakpointValue} from '@chakra-ui/react'

type Props = {
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    countdown: number;
    score: number;
    time: number;
    countstart: boolean;
    totalquestions: number;
}

const GameOver: React.FC<Props> = ({
    callback,
    time,
    score,
    countstart,
    totalquestions,
}) => {


  // allow one second per question
  // for each additional second over this remove add a penalty 
  const penalty = (() => { 
    console.log(Math.floor(time/ 1000)-totalquestions)
    if (Math.floor(time/ 1000)-totalquestions > 0) {
      console.log('here')
      return totalquestions-(Math.floor(time/ 1000))
    }
    else return 0
  })


  const finalScore = (Math.floor((score/ totalquestions)*100))

    return (
      <Box 
        bg='gray.200'
        border='10px'
        borderRadius='lg'
        boxShadow='xl'
        rounded='md'
        p={[4,6,10]}
        fontSize={useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl'})}
        >
        <Text
            color={'black'}
            fontWeight={500}
            lineHeight={1.5}
            fontSize={useBreakpointValue({ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl'})}
            >
            Frenzy Finished!
          </Text>
          <Text
            color={'black'}
            fontWeight={200}
            lineHeight={1.5}>
            {totalquestions} questions answered in {(Math.floor((time / 1000)))}.{("0" + Math.floor((time / 100))).slice(-1)}s seconds
          </Text>
            <Text
            color={'black'}
            fontWeight={200}
            lineHeight={1.5}>
            Right: {score} | Wrong : {totalquestions - score}
          </Text>
          <Tooltip 

          label="% of correct minus a 1% penalty for each additional second spent per question. Example: 10 correct in 9 seconds = 100%. 10 correct in 12 seconds = 98%"
          aria-label='% of correct minus a 1% time penalty for each extra second'
          hasArrow bg='gray.300' color='black'
          >
          <Text
            color={'black'}
            fontWeight={400}
            lineHeight={2}
            fontSize={useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' })}>
            Final Score: {finalScore + penalty()}%
          </Text>
          </Tooltip>
          <Box p={4}>
          <Button variantColor="blue" bg='gray.300' fontSize={useBreakpointValue({ base: '2xl', sm: '3xl', md: '4xl' })} p={[6,8]} onClick={callback}>
            {!countstart ? 'Restart' : 'Get Ready!'}</Button>
          </Box>
          {/* <Box>
            {!countstart ?
                  <Image
                  border='10px'
                  borderRadius='lg'
                  boxShadow='xl'
                  rounded='md'
                  src="checkerflagstill.png"
                  h={[200, 300, 500]}
                  alt='Countdown GIF Image'/>
                  :
                <Image
                    border='10px'
                    borderRadius='lg'
                    boxShadow='xl'
                    rounded='md'
                    src="checkerflag.gif"
                    h={[200, 300, 500]}
                    alt='Countdown GIF Image'/>
                }
          </Box> */}
        </Box>
    )
}

export default GameOver