import React from 'react'
import {AnswerObject} from '../containers/GameHolder'
import { Container, SimpleGrid, Image, Center, Box, Text} from '@chakra-ui/react';

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
        <Container maxW="container.xl" p={4} bg={'gray.300'} boxShadow='xl' rounded='md' border="2px" borderColor="gray.500">
        <Text fontSize="xl">
            {questionNr}/ {totalQuestions}
        </Text>
        {!userAnswer ? <Text fontSize="xl">{countryname[1]}</Text> : userAnswer && userAnswer.correct ? <Text color='green' fontSize="xl">Correct!</Text> : <Text color='red.600' fontSize="xl">Wrong!</Text>}
        <SimpleGrid columns={{ base: 3 }} spacing={10} p={4} gap={4}>
            {display_random.map(item=> (
            <button disabled={userAnswer ? true : false} value={item} onClick={callback}>
                <Box
                sx={{ userSelect: 'none'}}
                p={3}
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
                <Center>
                <Image
                    _hover={{
                        opacity: '0.6'
                        }}
                h={[50, 75, 200]}
                src={`flagssvg/${item}.svg`}
                alt='Flag Image'
                />
                </Center>
                {!userAnswer && <Text fontSize='md'>???</Text>}
                {userAnswer && item === countryname[0] && <Text fontSize='md'>{countryname[1]}</Text>}
                {userAnswer && item !== countryname[0] && item === incorrect_one[0] && <Text fontSize='md'>{incorrect_one[1]}</Text>}
                {userAnswer && item !== countryname[0] && item === incorrect_two[0] && <Text fontSize="md">{incorrect_two[1]}</Text>}
                </Box>
            </button>
            ))}
        </SimpleGrid>

    </Container>
)

export default QuestionCard