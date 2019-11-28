import React, {useState} from 'react';
import './QuizBox.scss'
import {EntryLabel} from './EntryLabel';
import {HoverPoint} from './HoverPoint';
import {Quiz} from './Quiz';

interface QuestionObject {
  title: string,
  subtitle: string,
  choices: Array<ChoiceObject>,
  answer: string
}

interface ChoiceObject {
  text: string,
  isCorrect: boolean,
  wasSelected: boolean,
  isActive?: boolean
}

interface QuizBoxProps {
  question:QuestionObject,
  lineWidth: number,
  lineRotationInDeg: number
}

export const QuizBox: React.FC<QuizBoxProps> = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className='question-container'>
      <div className='label'>
        <EntryLabel text={props.question.title}
                    lineWidth={props.lineWidth}
                    lineRotationInDeg={props.lineRotationInDeg}/>
        <HoverPoint className={'hover-point'}
                    mouseClicked={() => setIsOpen(!isOpen)}/>
      </div>
      <Quiz question={props.question} className={isOpen ? 'open' : 'closed'}/>
    </div>
  )
}
