import React from 'react'
import {AnswerObject} from '../containers/GameHolder'
import { Container, SimpleGrid, Image, Center, Box, Text, useBreakpointValue} from '@chakra-ui/react';

type Props = {
    countryname: string[];
    display_random: string[];
    incorrect_one: string[];
    incorrect_two: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number 
}

const QuestionCard: React.FC<Props> = ({ 
    countryname,
    display_random,
    incorrect_one,
    incorrect_two,
    callback,
    userAnswer, 
    questionNr,
    totalQuestions
}) => (
        <Container 
        maxW="container.xl" 
        p={[4]} 
        px={[1,2,4]} 
        bg={'gray.300'}
        fontSize={useBreakpointValue({ base: 'md', sm: 'lg', md: 'xl', lg: '2xl'})}
        boxShadow='xl' rounded='md' border="2px" borderColor="gray.500">
        <Text>
            Question {questionNr}/ {totalQuestions}
        </Text>
        {!userAnswer ? <Text>{countryname[1]}</Text> : userAnswer && userAnswer.correct ? <Text color='green'>Correct!</Text> : <Text color='red.600'>Wrong!</Text>}
        <SimpleGrid columns={{ base: 3 }} spacing={10} p={[0,2,4]} gap={[1,2,4]}>
            {display_random.map(item=> (
            <button disabled={userAnswer ? true : false} value={item} onClick={callback}>
                <Box
                sx={{ userSelect: 'none'}}
                p={[2,4]}
                border='1px'
                borderRadius='lg'
                boxShadow='xl'
                rounded='md'
                bg={!userAnswer ? 'white' : 
                userAnswer.correctAnswer === item ? 'green'
                : userAnswer.correctAnswer !== item && userAnswer.answer === item 
                ? 'red'
                : 'white'
                }
                 overflow='hidden'>
                <Center position="relative">
                <Image
                h={[75, 70, 150, 200]}
                src={`flagssvg/${item}.svg`}
                alt='Flag Image'
                />
                <Center position="absolute" 
                bg="white"

                borderRadius='lg'
                boxShadow='xl'
                rounded='md'>
                 {userAnswer && item === countryname[0] && 
                <Text p={1}>{countryname[1]}</Text>}
                {userAnswer && item !== countryname[0] && item === incorrect_one[0] && <Text p={1}>{incorrect_one[1]}</Text>}
                {userAnswer && item !== countryname[0] && item === incorrect_two[0] && <Text p={1}>{incorrect_two[1]}</Text>}
                </Center>
                </Center>
                </Box>
            </button>
            ))}
        </SimpleGrid>

    </Container>
)

export default QuestionCard