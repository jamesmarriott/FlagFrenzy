import {
  Box,
  VStack,
  Grid
} from "@chakra-ui/react"
import React, {useState, useEffect} from 'react'
import HeaderContain from "../components/Header"


import { fetchQuizQuestions } from '../API'
// import { QuestionType } from '../API'
import QuestionCard  from '../components/QuestionCard'
import Scorer from "../components/Scorer"
import StartMenu from "../components/StartMenu"
import GameOver from "../components/GameOver"
import Timer from '../components/Timer'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10
const POSSIBLE_ANSWERS = 3

const Game = () => {
  
  const [loading, setLoading] = useState(false)
  // using implicit type inference here - needs changing
  const [questions, setQuestions] = useState(fetchQuizQuestions(TOTAL_QUESTIONS, POSSIBLE_ANSWERS))
  const [currentQNr, setCurrentQNr] = useState(0)
  const [roundOver, setRoundOver] = useState(false)
  const [countDown, setCountDown] = useState(3)
  const [countStart, setCountStart] = useState(false)
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

   const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  const startGameClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true)
    setGameOver(false)
    setScore(0)
    setUserAnswers([])
    setCurrentQNr(0)
    setLoading(false)
    setCountStart(true)
}

const restartGameClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  setQuestions(fetchQuizQuestions(TOTAL_QUESTIONS, POSSIBLE_ANSWERS))
  setLoading(true)
  setGameOver(false)
  setScore(0)
  setUserAnswers([])
  setCurrentQNr(0)
  setLoading(false)
  setTime(0)
  setCountStart(true)
}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  setTimerOn(false)
  setRoundOver(true)
  if (!gameOver) {
    const answer = e.currentTarget.value;
    const correctAnswer = questions[currentQNr].correct_answer[0] === answer;
    if (correctAnswer) setScore(prev => prev + 1)
    const answerObject = {
      question: questions[currentQNr].correct_answer[1],
      answer,
      correct: correctAnswer,
      correctAnswer: questions[currentQNr].correct_answer[0],
    }
    setUserAnswers((prev) => [...prev, answerObject])
  }
  console.log(userAnswers)
}

  useEffect(() => {
    if (countDown > 0 && countStart === true) {
    setTimeout(() =>
      setCountDown(countDown - 1)
    , 700);
    }
    else if (countDown === 0) {
      setGameStarted(true)
      setCountStart(false)
      setTimerOn(true)
    }
  },[countDown, countStart]);

  
  useEffect(() => {
    if (roundOver === true) {
    setCountStart(false)
    setTimeout(() =>
      nextQuestion()
    , 900);
    }
    setRoundOver(false)
// eslint-disable-next-line
  },[roundOver]);

    useEffect(() => {
    let interval: any = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  
  const nextQuestion = () => {
    const nextQuestion = currentQNr + 1
    if (currentQNr +1 === TOTAL_QUESTIONS) {
      setGameOver(true)
    }
    else {
      setCurrentQNr(nextQuestion)
      setTimerOn(true)
    }
  }

  return (

    <Box textAlign="center">
      <Grid
      minH="100vh"
      bgGradient='linear(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)'
      >
      <VStack spacing={[2,4,6]}>

    {!gameStarted && !loading ? <StartMenu
     callback={startGameClick}
     countdown={countDown}
     countstart={countStart}
    />: null}

     {gameOver && 
     <><GameOver
        callback={restartGameClick}
        score={score}
        time={time}
        countdown={countDown}
        countstart={countStart}
        totalquestions={TOTAL_QUESTIONS}
     />
     <Scorer
     score={score}
   questionNr={currentQNr + 1}
   userAnswer={userAnswers ? userAnswers : undefined}
/>
</>}

    {gameStarted && !gameOver ? (
    <>
    <HeaderContain/>
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
    <Timer
      time={time}
    />
   <Scorer
          score={score}
        questionNr={currentQNr + 1}
        userAnswer={userAnswers ? userAnswers : undefined}

    />
    </>
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