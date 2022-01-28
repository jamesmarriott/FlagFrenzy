import flagdata from './flagdata/countries.json'
import { shuffleArray } from './utils';

export type QuestionType = {
  correct_answer: string[];
  incorrect_answer_one: string[];
  incorrect_answer_two: string[];
  all_answers: string[]
};

export const fetchQuizQuestions = (amount: number, possanswers: number) => {

// set an empty question array
  let questions = []

// loop through the number of questions needed
  for (let i = 0; i < amount; i++) {

  let uniqueIDs = []

  // get X number of unique IDs for each question

  while(uniqueIDs.length < possanswers ){

//get a random number from flagdata

    const num = Math.floor(Math.random () * flagdata.length)

  // check if this is already included 
  // this says that if the array does not include num then push it

    if (uniqueIDs.indexOf(num) === -1) {
      uniqueIDs.push(num)
    }
  }
// using our array of unique ID we can set each question 
// currently hardcoded to be one right answer and two wrong
// this can be changed if needed for increased difficult levels

    const question: QuestionType = ({
    correct_answer: [flagdata[uniqueIDs[0]].Code, flagdata[uniqueIDs[0]].Country],
    incorrect_answer_one: [flagdata[uniqueIDs[1]].Code, flagdata[uniqueIDs[1]].Country],
    incorrect_answer_two: [flagdata[uniqueIDs[2]].Code, flagdata[uniqueIDs[2]].Country],
    all_answers: shuffleArray([flagdata[uniqueIDs[0]].Code, flagdata[uniqueIDs[1]].Code, flagdata[uniqueIDs[2]].Code])
  })
  questions.push(question)
}

return questions

};