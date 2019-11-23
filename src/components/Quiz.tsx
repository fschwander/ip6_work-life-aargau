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
    <div className={`Quiz ${props.className}`}>
      <p><b>Quiz </b>{q.title}</p>
      <p>{q.subtitle}</p>
      <p className='choice-container'>
        {q.choices.map(c => <RectButton onClick={() => console.log('clicked')} text={c.text}/>)}
      </p>
      <p>{q.answer}</p>
    </div>
  )
}
