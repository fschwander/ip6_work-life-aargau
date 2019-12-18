import React, {Component} from 'react';
import {ChoiceInterface, QuestionInterface} from '../../pages/intro/data/QuestionInterface';
import {RectButton} from '../buttons/RectButton';

interface QuizProps {
  className?: string
  question: QuestionInterface,
  orientation: string,
  quizAnsweredCorrectly: boolean,
  setQuizAnsweredCorrectly: Function
}

interface QuizState {
  quizStarted: boolean,
  response: string
}

export class Quiz extends Component<QuizProps, QuizState> {

  constructor(props: QuizProps) {
    super(props)

    this.state = {
      quizStarted: false,
      response: '',
    }

    props.question.choices.forEach(c => c.wasSelected = true)
  }

  selectChoice = (c: ChoiceInterface) => {
    this.setState({quizStarted: true})
    c.wasSelected = true;

    if (c.isCorrect) {
      this.props.setQuizAnsweredCorrectly(true)
      this.props.question.choices.forEach(c => c.isActive = c.isCorrect)
    } else {
      c.isActive = !c.wasSelected || (c.wasSelected && c.isCorrect)
    }
    this.updateResponse(c.isCorrect);
  }

  updateResponse = (wasCorrect: boolean): void => {
    const {question} = this.props;
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
      this.setState({response: question.answer});
    } else {
      const getRandomIndex = () => Math.floor(Math.random() * wrongResponses.length)
      let randomIndex = getRandomIndex();
      while (this.state.response === wrongResponses[randomIndex]) {
        randomIndex = getRandomIndex();
      }
      this.setState({response: wrongResponses[randomIndex]})
    }
  }

  render() {
    const {response} = this.state;
    const {question, className, orientation} = this.props;

    return (
      <div className={`Quiz ${className !== undefined ? className : ''} ${orientation}`}>
        <span className='border-line'/>
        <div className='text-container'>
          <p className='highlighted'><b>Quiz </b>über den Aargau</p>
          <p className='large'>{question.subtitle}</p>
          <div className='choice-container'>
            {question.choices.map((c, i) => <RectButton key={i}
                                                        isActive={c.isActive}
                                                        onClick={() => this.selectChoice(c)}
                                                        text={c.text}/>)}
          </div>
          <p className='answer-container small'>{response}</p>
        </div>
      </div>
    )
  }
}
