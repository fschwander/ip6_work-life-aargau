import React, {CSSProperties, useState} from 'react';
import {EntryLabel} from './EntryLabel';
import {HoverPoint} from './HoverPoint';
import {Quiz} from './Quiz';
import './QuizBox.scss'

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
  question: QuestionObject,
  lineWidth: number,
  lineRotationInDeg: number,
  orientation?: string
}

export const QuizBox: React.FC<QuizBoxProps> = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const orientation = props.orientation === undefined ? 'left' : props.orientation;

  const getVerticalOrientation = () => {
    if (orientation === 'left' && props.lineRotationInDeg > 270) {
      return 'column-reverse'
    } else {
      return 'column'
    }
  }

  const verticalOrientation: CSSProperties = {flexDirection: getVerticalOrientation()}

  return (
    <div className={`QuizBox question-container ${props.orientation}`} style={verticalOrientation}>
      <div className='label'>
        <EntryLabel text={props.question.title}
                    lineWidth={props.lineWidth}
                    lineRotationInDeg={props.lineRotationInDeg}
                    orientation={orientation}/>
        <HoverPoint className={'hover-point'}
                    mouseClicked={() => setIsOpen(!isOpen)}/>
      </div>
      <Quiz question={props.question} className={isOpen ? 'open' : 'closed'}/>
    </div>
  )
}
