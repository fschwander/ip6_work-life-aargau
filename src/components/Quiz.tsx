import React, {Component} from 'react';
import './Quiz.scss'
import {RectButton} from './RectButton';

interface QuestionObject {
  title: string,
  subtitle: string,
  choices: Array<ChoiceObject>,
  answer: string
}

interface ChoiceObject {
  text: string,
  isCorrect: boolean,
  wasSelected: boolean
}

interface QuizProps {
  className?: string
  question: QuestionObject
}

interface QuizState {
  quizStarted: boolean,
  quizAnsweredCorrectly: boolean,
  response: string
}

export class Quiz extends Component<QuizProps, QuizState> {

  constructor(props: QuizProps) {
    super(props)

    this.state = {
      quizStarted: false,
      quizAnsweredCorrectly: false,
      response: '',
    }
  }

  selectChoice = (choice: ChoiceObject) => {
    this.setState({quizStarted: true})
    choice.wasSelected = true;

    if (choice.isCorrect) {
      this.setState({quizAnsweredCorrectly: true})
    }
    this.updateResponse(choice.isCorrect);
  }

  updateResponse = (wasCorrect: boolean): void => {
    const {question} = this.props;
    const wrongResponses = [
      'Leider nein... Versuch es weiter',
      'Falsch. Versuch\'s noch mal, das kannst du besser',
      'Hmmm, wirklich?... Das war falsch',
      'Netter Versuch - aber trozdem falsche Antwort',
    ]

    if (wasCorrect) {
      this.setState({response: 'Richtig! ' + question.answer});
    } else {
      const responseIndex = Math.floor(Math.random() * (wrongResponses.length - 1))
      this.setState({response: wrongResponses[responseIndex]})
    }
  }

  render() {
    const {response} = this.state;
    const {question, className} = this.props;

    return (
      <div className={`Quiz ${className !== undefined ? className : ''}`}>
        <p className='highlighted'><b>Quiz </b>{question.title}</p>
        <p className='large'>{question.subtitle}</p>
        <div className='choice-container'>
          {question.choices.map((c, i) => <RectButton key={i}
                                                      isActive={!c.wasSelected || (c.wasSelected && c.isCorrect)}
                                                      onClick={() => this.selectChoice(c)}
                                                      text={c.text}/>)}
        </div>
        <p className='answer-container'>{response}</p>
      </div>
    )
  }
}
