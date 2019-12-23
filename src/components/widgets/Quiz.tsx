import React, {useState} from 'react';
import {ChoiceInterface, QuestionInterface} from '../../pages/intro/data/QuestionInterface';
import {RectButton} from '../buttons/RectButton';

interface QuizProps {
  className?: string
  question: QuestionInterface,
  orientation: string,
  quizAnsweredCorrectly: boolean,
  setQuizAnsweredCorrectly: Function
}

export const Quiz: React.FC<QuizProps> = props => {
  const [response, setResponse] = useState('')

  props.question.choices.forEach(c => c.wasSelected = true)

  const selectChoice = (c: ChoiceInterface) => {
    c.wasSelected = true;

    if (c.isCorrect) {
      props.setQuizAnsweredCorrectly(true)
      props.question.choices.forEach(c => c.isActive = c.isCorrect)
    } else {
      c.isActive = !c.wasSelected || (c.wasSelected && c.isCorrect)
    }
    updateResponse(c.isCorrect);
  }

  const updateResponse = (wasCorrect: boolean): void => {
    const {question} = props;
    const wrongResponses = [
      'Leider nein... Versuch es weiter.',
      'Falsch. Versuch\'s noch mal.',
      'Ganz falsch. Das solltest du besser wissen.',
      'Hmmm, wirklich?... Das war falsch.',
      'Wie kommst du auf so eine Antwort? Falsch... :)',
      'Wie Donald Trump gerne sagt: WROOOOOOONG!',
      'Netter Versuch - aber trozdem falsch.',
      'Jaaaa, also... Ähm, nein. Einfach nein.',
      'Falsch. Habt ihr so was nicht in der Schule gelernt?',
      '¯\\_(ツ)_/¯ Falsch!'
    ]

    if (wasCorrect) {
      setResponse(question.answer);
    } else {
      const getRandomIndex = () => Math.floor(Math.random() * wrongResponses.length)
      let randomIndex = getRandomIndex();
      while (response === wrongResponses[randomIndex]) {
        randomIndex = getRandomIndex();
      }
      setResponse(wrongResponses[randomIndex])
    }
  }

  const {question, className, orientation} = props;

  return (
    <div className={`Quiz ${className !== undefined ? className : ''} ${orientation}`}>
      <span className='border-line'/>
      <div className='text-container'>
        <p className='highlighted'><b>Quiz </b>über den Aargau</p>
        <p className='large'>{question.subtitle}</p>
        <div className='choice-container'>
          {question.choices.map((c, i) => <RectButton key={i}
                                                      isActive={c.isActive}
                                                      onClick={() => selectChoice(c)}
                                                      text={c.text}/>)}
        </div>
        <p className='answer-container small'>{response}</p>
      </div>
    </div>
  )
}
