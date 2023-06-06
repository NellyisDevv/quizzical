import React from 'react'
import { decode } from 'html-entities'

export default function Questions(props) {
  // console.log(props)
  const [selected, setSelected] = React.useState(false)
  const [items, setItems] = React.useState(props.all)

  function selectAnswer(id, answer) {
    // console.log(
    //   `Question "${decode(
    //     props.question
    //   )}" with id of ${id} was clicked with the answer of "${answer}"`
    // )

    // if (answer === props.rightAnswer) {
    //   console.log('correct!!!')
    // } else {
    //   console.log('Wrong!!!')
    // }

    setItems(prevState => ({
      ...prevState,
      selected: answer,
    }))
  }

  console.log(items.selected)

  const styles = { backgroundColor: '#D6DBF5', border: 'none' }

  return (
    <div className='flex flex-col justify-center mt-5 max-w-[900px] border-b-[1px] border-[#DBDEF0] p-5'>
      <h1 className='text-[#293264] font-bold text-xl sm:text-2xl mb-2'>
        {decode(props.question)}
      </h1>
      <div className='flex gap-5'>
        <div
          style={items.selected === props.randomAnswers[0] ? styles : null}
          onClick={() => selectAnswer(1, props.randomAnswers[0])}
          className='flex bg-slate-500 cursor-pointer'
        >
          {decode(props.randomAnswers[0])}
        </div>
        <div
          style={items.selected === props.randomAnswers[1] ? styles : null}
          onClick={() => selectAnswer(2, props.randomAnswers[1])}
          className='flex bg-slate-500 cursor-pointer'
        >
          {decode(props.randomAnswers[1])}
        </div>
        <div
          style={items.selected === props.randomAnswers[2] ? styles : null}
          onClick={() => selectAnswer(3, props.randomAnswers[2])}
          className='flex bg-slate-500 cursor-pointer'
        >
          {decode(props.randomAnswers[2])}
        </div>
        <div
          style={items.selected === props.randomAnswers[3] ? styles : null}
          onClick={() => selectAnswer(4, props.randomAnswers[3])}
          className='flex bg-slate-500 cursor-pointer'
        >
          {decode(props.randomAnswers[3])}
        </div>
      </div>
    </div>
  )
}
