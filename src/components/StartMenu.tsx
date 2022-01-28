import { Box, Button, Image,} from '@chakra-ui/react'

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
      <Box>
          <Box p={10}>
          <Button variantColor="blue" bg='gray.300' fontSize="4xl" p={8} onClick={callback}>
            {!countstart ? 'Start' : 'Get Ready!'}</Button>
          </Box>
          <Box>
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
          </Box>
        </Box>
    )
}

export default StartMenu