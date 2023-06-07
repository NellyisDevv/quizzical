import React from 'react'
import { decode } from 'html-entities'

export default function Questions(props) {
  // console.log(props.selectAnswer)
  const [items, setItems] = React.useState(props.all)
  const [correct, setCorrect] = React.useState(0)

  function selectAnswer(id, answer) {
    setItems(prevState => ({
      ...prevState,
      selected: answer,
    }))

    if (items.selected === props.rightAnswer) {
      console.log('correct!')
      setCorrect(correct + 1)
    } else {
      console.log('wrong!')
    }
  }

  function checkAnswers() {
    console.log(items.selected)
  }

  const styles = { backgroundColor: '#D6DBF5', border: 'none' }

  console.log(correct)

  return (
    <div className='flex flex-col justify-center mt-5 max-w-[900px] border-b-[1px] border-[#DBDEF0] p-5'>
      <h1 className='text-[#293264] font-bold text-xl sm:text-2xl mb-2'>
        {decode(props.question)}
      </h1>
      <div className='flex gap-5'>
        <div
          style={items.selected === props.randomAnswers[0] ? styles : null}
          onClick={() => selectAnswer(1, props.randomAnswers[0])}
          className='flex bg-white border-[1px] border-[#293264] cursor-pointer p-1 rounded-xl min-w-[80px] justify-center items-center'
        >
          {decode(props.randomAnswers[0])}
        </div>
        <div
          style={items.selected === props.randomAnswers[1] ? styles : null}
          onClick={() => selectAnswer(2, props.randomAnswers[1])}
          className='flex bg-white border-[1px] border-[#293264] cursor-pointer p-1 rounded-xl min-w-[80px] justify-center items-center'
        >
          {decode(props.randomAnswers[1])}
        </div>
        {props.randomAnswers[2] && (
          <div
            style={items.selected === props.randomAnswers[2] ? styles : null}
            onClick={() => selectAnswer(3, props.randomAnswers[2])}
            className='flex bg-white border-[1px] border-[#293264] cursor-pointer p-1 rounded-xl min-w-[80px] justify-center items-center'
          >
            {decode(props.randomAnswers[2])}
          </div>
        )}
        {props.randomAnswers[3] && (
          <div
            style={items.selected === props.randomAnswers[3] ? styles : null}
            onClick={() => selectAnswer(4, props.randomAnswers[3])}
            className='flex bg-white border-[1px] border-[#293264] cursor-pointer p-1 rounded-xl min-w-[80px] justify-center items-center'
          >
            {decode(props.randomAnswers[3])}
          </div>
        )}
      </div>
      <button className='hidden' onClick={checkAnswers}>
        Check
      </button>
    </div>
  )
}
