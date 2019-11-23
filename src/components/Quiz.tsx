import React from 'react';
import './Quiz.scss'
import {RectButton} from './RectButton';

interface QuizProps {
  className?: string
  question: QuestionObject
}

interface QuestionObject {
  title: string,
  subtitle: string,
  choices: Array<ChoiceObject>,
  answer: string
}

interface ChoiceObject {
  text: string,
  isCorrect: boolean
}

export const Quiz: React.FC<QuizProps> = props => {

  const q = props.question;

  return (
    <div className={`Quiz ${props.className !== undefined ? props.className : ''}`}>
      <p className='highlighted'><b>Quiz </b>{q.title}</p>
      <p className='large'>{q.subtitle}</p>
      <div className='choice-container'>
        {q.choices.map((c, i) => <RectButton key={i}
                                             onClick={() => console.log('clicked')}
                                             text={c.text}/>)
        }
      </div>
      <p>{q.answer}</p>
    </div>
  )
}
