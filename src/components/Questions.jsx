import React from 'react'
import { decode } from 'html-entities'

export default function Questions(props) {
  console.log(props.question.selected)
  const [answers, setAnswers] = React.useState()
  const styles = { backgroundColor: '#D6DBF5', border: 'none' }
  const correctAnswers = { backgroundColor: '#94D7A2', border: 'none' }
  const wrongAnswers = { backgroundColor: '#F8BCBC', border: 'none' }

  function clickSelections() {
    if (props.question.selected === props.question.answers[0]) {
      return styles
    } else {
      return null
    }
  }

  function checkSelections() {
    if (props.question.answers[0] === props.question.correct) {
      return correctAnswers
    } else {
      return null
    }
  }

  return (
    <div className='flex flex-col justify-center mt-5 max-w-[900px] border-b-[1px] border-[#DBDEF0] p-5'>
      <h1 className='text-[#293264] font-bold text-xl sm:text-2xl mb-2'>
        {decode(props.question.question)}
      </h1>
      {/* <div>{props.question.answers}</div> */}
      <div className='flex gap-5'>
        <div
          // style={
          //   props.question.selected === props.question.answers[0]
          //     ? styles
          //     : null
          // }
          style={!props.endGame ? clickSelections() : checkSelections()}
          onClick={() =>
            props.handleClickAnswer(props.id, props.question.answers[0])
          }
          className='flex bg-white border-[1px] border-[#293264] cursor-pointer p-1 rounded-xl min-w-[80px] justify-center items-center'
        >
          {decode(props.question.answers[0])}
        </div>
        <div
          // style={
          //   props.question.selected === props.question.answers[1]
          //     ? styles
          //     : null
          // }
          style={
            !props.endGame
              ? props.question.selected === props.question.answers[1]
                ? styles
                : null
              : props.question.answers[1] === props.question.correct
              ? correctAnswers
              : null
          }
          onClick={() =>
            props.handleClickAnswer(props.id, props.question.answers[1])
          }
          className='flex bg-white border-[1px] border-[#293264] cursor-pointer p-1 rounded-xl min-w-[80px] justify-center items-center'
        >
          {decode(props.question.answers[1])}
        </div>
        {props.question.answers[2] && (
          <div
            // style={
            //   props.question.selected === props.question.answers[2]
            //     ? styles
            //     : null
            // }
            style={
              !props.endGame
                ? props.question.selected === props.question.answers[2]
                  ? styles
                  : null
                : props.question.answers[2] === props.question.correct
                ? correctAnswers
                : null
            }
            onClick={() =>
              props.handleClickAnswer(props.id, props.question.answers[2])
            }
            className='flex bg-white border-[1px] border-[#293264] cursor-pointer p-1 rounded-xl min-w-[80px] justify-center items-center'
          >
            {decode(props.question.answers[2])}
          </div>
        )}
        {props.question.answers[3] && (
          <div
            // style={
            //   props.question.selected === props.question.answers[3]
            //     ? styles
            //     : null
            // }
            style={
              !props.endGame
                ? props.question.selected === props.question.answers[3]
                  ? styles
                  : null
                : props.question.answers[3] === props.question.correct
                ? correctAnswers
                : null
            }
            onClick={() =>
              props.handleClickAnswer(props.id, props.question.answers[3])
            }
            className='flex bg-white border-[1px] border-[#293264] cursor-pointer p-1 rounded-xl min-w-[80px] justify-center items-center'
          >
            {decode(props.question.answers[3])}
          </div>
        )}
      </div>
    </div>
  )
}
