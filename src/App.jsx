import React, { useState } from 'react'
import Questions from './components/Questions.jsx'
import { nanoid } from 'nanoid'

function App() {
  const [startGame, setStartGame] = React.useState(true)
  const [formData, setFormData] = React.useState({
    amount: '',
    category: '',
    difficulty: '',
    type: '',
  })
  const [questions, setQuestions] = React.useState([])
  const [correct, setCorrect] = React.useState()
  const [endGame, setEndGame] = React.useState(false)

  const styles = {
    backgroundImage: 'url(/img/background.svg)',
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await fetch(
      `https://opentdb.com/api.php?amount=${formData.amount || 5}${
        formData.category && `&category=${formData.category}`
      }${formData.difficulty && `&difficulty=${formData.difficulty}`}${
        formData.type && `&type=${formData.type}`
      }`
    )

    let data = await res.json()
    let allQuestions = []
    data.results.forEach(question => {
      allQuestions.push({
        id: nanoid(),
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
        question: question.question,
        correct: question.correct_answer,
        selected: null,
        checked: false,
      })
    })
    setQuestions(allQuestions)
    setStartGame(!startGame)
  }

  function handleClickAnswer(id, answer) {
    setQuestions(prevState =>
      prevState.map(question => {
        return question.id === id ? { ...question, selected: answer } : question
      })
    )
  }

  questions.map(question => console.log(question.correct))

  // console.log(correct)

  function checkAnswers() {
    setQuestions(prevState =>
      prevState.map(prevState =>
        prevState.selected === prevState.correct
          ? { ...prevState, check: true }
          : { ...prevState, check: false }
      )
    )

    let correct = 0
    questions.forEach(question => {
      if (question.correct === question.selected) {
        correct += 1
      }
    })

    setCorrect(correct)

    setEndGame(true)
  }

  function newGame() {
    location.reload()
  }

  const questionElements = questions
    ? questions.map(question => (
        <Questions
          key={question.id}
          question={question}
          id={question.id}
          handleClickAnswer={handleClickAnswer}
          endGame={endGame}
        />
      ))
    : []

  return (
    <div>
      {startGame ? (
        <div
          style={styles}
          className='bg-[#F5F7FB] h-screen flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover font-karla'
        >
          <h1 className='text-[#293264] p-6 text-5xl font-bold'>Quizzical</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder='5'
                name='amount'
                value={formData.amount}
                onChange={handleChange}
                min={5}
                max={20}
                className='mt-1 p-4 flex rounded-xl w-[200px]'
                type='number'
              />
            </div>
            <div className=''>
              <label className='label' htmlFor='category'>
                {/* Select Category: */}
              </label>
              <select
                name='category'
                onChange={handleChange}
                value={formData.category}
                className='mt-1 p-4 flex rounded-xl w-[200px]'
              >
                <option value=''>Any Category</option>
                <option value='9'>General Knowledge</option>
                <option value='10'>Entertainment: Books</option>
                <option value='11'>Entertainment: Film</option>
                <option value='12'>Entertainment: Music</option>
                <option value='13'>Entertainment: Musicals & Theatres</option>
                <option value='14'>Entertainment: Television</option>
                <option value='15'>Entertainment: Video Games</option>
                <option value='16'>Entertainment: Board Games</option>
                <option value='17'>Science & Nature</option>
                <option value='18'>Science: Computers</option>
                <option value='19'>Science: Mathematics</option>
                <option value='20'>Mythology</option>
                <option value='21'>Sports</option>
                <option value='22'>Geography</option>
                <option value='23'>History</option>
                <option value='24'>Politics</option>
                <option value='25'>Art</option>
                <option value='26'>Celebrities</option>
                <option value='27'>Animals</option>
                <option value='28'>Vehicles</option>
                <option value='29'>Entertainment: Comics</option>
                <option value='30'>Science: Gadgets</option>
                <option value='31'>
                  Entertainment: Japanese Anime & Manga
                </option>
                <option value='32'>Entertainment: Cartoon & Animations</option>
              </select>
            </div>
            <div>
              <label className='label' htmlFor='difficulty'>
                {/* Select Difficulty: */}
              </label>
              <select
                name='difficulty'
                onChange={handleChange}
                value={formData.difficulty}
                className='mt-1 p-4 flex rounded-xl w-[200px]'
              >
                <option value=''>Any Difficulty</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </div>
            <div>
              <label className='label' htmlFor='type'>
                {/* Select Type: */}
              </label>
              <select
                name='type'
                onChange={handleChange}
                value={formData.type}
                className='mt-1 p-4 flex rounded-xl w-[200px]'
              >
                <option value=''>Any Type</option>
                <option value='multiple'>Multiple Choice</option>
                <option value='boolean'>True / False</option>
              </select>
            </div>
            <button className='bg-[#4D5B9E] p-2 rounded-xl text-white text-2xl w-[200px] h-[65px] mt-3'>
              Start quiz
            </button>
          </form>
        </div>
      ) : (
        <div
          style={styles}
          className='bg-[#F5F7FB] flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover font-karla min-h-screen'
        >
          <div>{questionElements}</div>

          {!endGame ? (
            <button
              onClick={checkAnswers}
              className='bg-[#4D5B9E] p-3 rounded-xl mt-8 text-white cursor-pointer mb-8'
            >
              Check answers
            </button>
          ) : (
            <div className='flex justify-center items-center gap-4'>
              <p className='font-bold text-xl'>{`You scored ${correct}/5 correct answers`}</p>
              <button
                onClick={newGame}
                className='bg-[#4D5B9E] p-3 rounded-xl mt-8 text-white cursor-pointer mb-8'
              >
                Play again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
