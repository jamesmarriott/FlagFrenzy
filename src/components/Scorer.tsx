import React from 'react'
import { Container, Image, Grid, GridItem, Text, useBreakpointValue} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }[]

type Props = {
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    score: number;
}

const Scorer: React.FC<Props> = ({ 
    userAnswer,
    questionNr,
    score
}) => {

    console.log(userAnswer)

    return (
        <Container fontSize={useBreakpointValue({ base: 'md', sm: 'lg', md: '2xl' })} maxW="container.xl" p={[1,2,4]} bg={'gray.300'} boxShadow='xl' rounded='md' border="2px" borderColor="gray.500">
        <Text>
            Correct: {score}
        </Text>            
        <Grid templateColumns='repeat(8, 1fr)' align='left' p={[1,2,4]} gap={1}>
            {userAnswer && userAnswer.map((item, id) => (
            <>
                <GridItem colSpan={1}>
                 <Text>#{id+1}</Text>
                 </GridItem>
                <GridItem colSpan={4}>
                <Text>{item.question}</Text>
                </GridItem>
                <GridItem colSpan={2}>
              <Image 
                h={[5, 15, 30]}
                w={[10, 30, 30]}
                src={`flagssvg/${item.correctAnswer}.svg`}
                alt='Flag Image'/>
                    </GridItem>
              <GridItem colSpan={1}>
                    <Text>{item.correct ? <CheckIcon color="green"/> : <CloseIcon color="red"/>}</Text>
                    </GridItem>
                </>
            ))}
        </Grid>
    </Container>
    )
        }

export default Scorer