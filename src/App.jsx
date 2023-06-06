import React, { useState } from 'react'

function App() {
  const [startGame, setStartGame] = React.useState(false)
  const [formData, setFormData] = React.useState({
    amount: '',
    category: '',
    difficulty: '',
    type: '',
  })
  const [questions, setQuestions] = React.useState([])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

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
    setQuestions(data.results)
  }

  const styles = {
    backgroundImage: 'url(/img/background.svg)',
  }

  // for every question object we are going to need to make a question component which will load on the screen containing the question name and the question choices, to achieve this create a question component and render it over the map method, if you choose 5 questions there should be 5 question components created!
  questions.map(question => console.log(question))

  return (
    <div>
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
              <option value='31'>Entertainment: Japanese Anime & Manga</option>
              <option value='32'>Entertainment: Cartoon & Animations</option>
            </select>
          </div>
          <div>
            <label className='label' htmlFor='difficulty'>
              {/* Select Category: */}
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
              {/* Select Category: */}
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
          <button
            onClick={() => setStartGame(true)}
            className='bg-[#4D5B9E] p-2 rounded-xl text-white text-2xl w-[200px] h-[65px] mt-3'
          >
            Start quiz
          </button>
        </form>
      </div>
      )
    </div>
  )
}

export default App

// React.useEffect(() => {
//   fetch(
//     'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple'
//   )
//     .then(res => res.json())
//     .then(questions => console.log(questions))
// }, [startGame])