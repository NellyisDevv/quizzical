{
  /* <div className='flex gap-5'>
        <div
          style={selected ? styles : null}
          onClick={() => selectAnswer(1, props.randomAnswers[0])}
          className='flex bg-slate-500 cursor-pointer'
        >
          {decode(props.randomAnswers[0])}
        </div>
        <div
          style={selected ? styles : null}
          onClick={() => selectAnswer(2, props.randomAnswers[1])}
          className='flex bg-slate-500 cursor-pointer'
        >
          {decode(props.randomAnswers[1])}
        </div>
        <div
          onClick={() => selectAnswer(3, props.randomAnswers[2])}
          className='flex bg-slate-500 cursor-pointer'
        >
          {decode(props.randomAnswers[2])}
        </div>
        <div
          onClick={() => selectAnswer(4, props.randomAnswers[3])}
          className='flex bg-slate-500 cursor-pointer'
        >
          {decode(props.randomAnswers[3])}
        </div>
      </div> */
}

function selectAnswer(id, answer) {
  console.log(
    `Question "${decode(
      props.question
    )}" with id of ${id} was clicked with the answer of "${answer}"`
  )

  setSelected(!selected)

  if (answer === props.rightAnswer) {
    console.log('correct!!!')
  } else {
    console.log('Wrong!!!')
  }
}
