import {
  Box,
  VStack,
  Grid,
  Text,
  Button,
} from "@chakra-ui/react"
import React, {useState} from 'react'

import { fetchQuizQuestions } from '../API'
// import { QuestionType } from '../API'
import QuestionCard  from '../components/QuestionCard'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 2
const POSSIBLE_ANSWERS = 3

const Game = () => {
  
  const [loading, setLoading] = useState(false)
  // using implicit type inference here - needs changing
  const [questions, setQuestions] = useState(fetchQuizQuestions(TOTAL_QUESTIONS, POSSIBLE_ANSWERS))
  const [currentQNr, setCurrentQNr] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [gameStarted, setGameStarted] = useState(false)

  const startGame = () => {
    setGameStarted(true)
    setLoading(true)
    setGameOver(false)
    setScore(0)
    console.log(questions)
    setUserAnswers([])
    setCurrentQNr(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

      if (!gameOver) {
        const answer = e.currentTarget.value;
        const correct = questions[currentQNr].correct_answer[0] === answer;
        if (correct) setScore(prev => prev + 1)
        const answerObject = {
          question: questions[currentQNr].correct_answer[0],
          answer,
          correct,
          correctAnswer: questions[currentQNr].correct_answer[0],
        }
        setUserAnswers((prev) => [...prev, answerObject])
      }
  }

  const nextQuestion = () => {
    const nextQuestion = currentQNr + 1
    if (currentQNr === TOTAL_QUESTIONS) {
      setGameOver(true)
    }
    else {
      setCurrentQNr(nextQuestion)
    }
  }

  return (

    <Box textAlign="center">
      <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
    <Text fontSize="4xl">🏁Flag Frenzy🏁</Text>

    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <>
          <Button variantColor="blue" bg='green.300' fontSize="4xl" p={8} onClick={startGame}>
            Start</Button>
    </>)
    : null}
      
    {!gameOver ?
    <Text fontSize="2xl">Score: {score}</Text> : null}

    {gameOver && gameStarted ?
    <Text>Game Over! Your final Score is {score}</Text> : null}
    
    {loading && <p>Loading Questions ...</p>}

    {!loading && !gameOver ? (
    <QuestionCard
      questionNr={currentQNr + 1}
      totalQuestions={TOTAL_QUESTIONS}
      countryname={questions[currentQNr].correct_answer}
      incorrect_one={questions[currentQNr].incorrect_answer_one}
      incorrect_two={questions[currentQNr].incorrect_answer_two}
      display_random={questions[currentQNr].all_answers}
      userAnswer={userAnswers ? userAnswers[currentQNr] : undefined}
      callback={checkAnswer}
    />
    ) : <Text>Final Score {score}</Text>}

    {!gameOver 
    && !loading 
    && userAnswers.length === currentQNr + 1 
    && currentQNr !== TOTAL_QUESTIONS - 1 ? ( 
    <button className='next' onClick={nextQuestion}>Next</button>
    ) : null}
      </VStack>
    </Grid>
  </Box>
  )
}

export default Game


// setround / startround with a timeout / useEffect
// timer needs to be a variable
// allow number inputs
// start timer
// set questions
// time taken // score
// start game modal
// end game modal 
// disable click after round
// fix type script issue for questions array

// expansion
// allow choice of flags
// frenzy mode where you keep going forever until you make a mistake
// game should track which flags you have guessed and