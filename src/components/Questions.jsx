import React from 'react'
import { decode } from 'html-entities'

export default function Questions(props) {
  const [formData, setFormData] = React.useState({
    employment: '',
  })
  const [isClicked, setIsClicked] = React.useState(false)

  function handleChange(event) {
    const { name, value, checked, type } = event.target

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const labelFocused = { backgroundColor: '#D6DBF5', border: 'none' }

  return (
    // The classnames on the labels repeat themselves 4 times make this code more DRY (Dont Repeat Yourself)
    <div className='flex flex-col justify-center mt-5 max-w-[900px] border-b-[1px] border-[#DBDEF0] p-5'>
      <h1 className='text-[#293264] font-bold text-xl sm:text-2xl mb-1'>
        {decode(props.question)}
      </h1>
      <div className='flex'>
        <div className=''>{decode(props.allAnswers)}</div>
        {/* <form action=''>
          <div className='flex mt-2 radio'>
            <input
              onChange={handleChange}
              checked={formData.employment === 'choice1'}
              id='choice1'
              value='1'
              type='radio'
              name='employment'
              className='hidden'
            />
            <label
              className='bg-white p-3 border-[1px] border-[#293264] rounded-xl min-h-[40px] flex justify-center items-center mr-5 min-w-[100px]'
              htmlFor='choice1'
            >
              {decode(props.allAnswers[0])}
            </label>
            <br />
            <input
              checked={formData.employment === 'choice2'}
              onChange={handleChange}
              id='choice2'
              value='2'
              type='radio'
              name='employment'
              className='hidden'
            />
            <label
              className='bg-white p-3 border-[1px] border-[#293264] rounded-xl min-h-[40px] flex justify-center items-center mr-5 min-w-[100px]'
              htmlFor='choice2'
            >
              {decode(props.allAnswers[1])}
            </label>
            <br />
            <input
              onChange={handleChange}
              checked={formData.employment === 'choice3'}
              value='3'
              id='choice3'
              type='radio'
              name='employment'
              className='hidden'
            />
            <label
              className='bg-white p-3 border-[1px] border-[#293264] rounded-xl min-h-[40px] flex justify-center items-center mr-5 min-w-[100px]'
              htmlFor='choice3'
            >
              {decode(props.allAnswers[2])}
            </label>
            <br />
            <input
              onChange={handleChange}
              checked={formData.employment === 'choice4'}
              value='4'
              id='choice4'
              type='radio'
              name='employment'
              className='hidden'
            />

            <label
              className='bg-white p-3 border-[1px] border-[#293264] rounded-xl min-h-[40px] min-w-[100px] flex justify-center items-center mr-5'
              htmlFor='choice4'
            >
              {decode(props.allAnswers[3])}
            </label>
          </div>
        </form> */}
      </div>
    </div>
  )
}
