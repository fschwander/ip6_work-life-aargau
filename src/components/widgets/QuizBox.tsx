import React, {CSSProperties, useState} from 'react';
import {QuestionInterface} from '../../res/data/intro/QuestionInterface';
import {HoverPoint} from '../buttons/HoverPoint';
import {EntryLabel} from '../labels/EntryLabel';
import {Quiz} from './Quiz';

interface QuizBoxProps {
  className: string,
  question: QuestionInterface,
  lineLength: number,
  lineRotationInDeg: number,
  orientation?: string
}

export const QuizBox: React.FC<QuizBoxProps> = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const [quizAnsweredCorrectly, setQuizAnsweredCorrectly] = useState(false);
  const orientation = props.orientation === undefined ? 'left' : props.orientation;

  const getVerticalOrientation = () => {
    if (orientation === 'left' && props.lineRotationInDeg > 270) {
      return 'row'
    } else {
      return 'column'
    }
  }

  const verticalOrientation: CSSProperties = {flexDirection: getVerticalOrientation()}

  return (
    <div className={`QuizBox ${props.className} ${props.orientation} ${isOpen ? 'is-open': 'is-closed'}`}
         style={verticalOrientation}
         onMouseLeave={() => setIsOpen(false)}>
      <div className='label'>
        <EntryLabel text={props.question.title}
                    lineWidth={props.lineLength}
                    lineRotationInDeg={props.lineRotationInDeg}
                    orientation={orientation}/>
        <HoverPoint onMouseEnter={() => setIsOpen(true)}/>
      </div>
      <Quiz question={props.question}
            className={isOpen ? 'open' : 'closed'}
            orientation={orientation}
            quizAnsweredCorrectly={quizAnsweredCorrectly}
            setQuizAnsweredCorrectly={setQuizAnsweredCorrectly}/>
    </div>
  )
}


