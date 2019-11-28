import React, {useState} from 'react';
import './QuizBox.scss'
import {EntryLabel} from './EntryLabel';
import {HoverPoint} from './HoverPoint';
import {Quiz} from './Quiz';


interface QuizBoxProps {
  // questions:Object
}

export const QuizBox: React.FC<QuizBoxProps> = (props) => {

  const [isOpen, setIsOpen] = useState(false)


  const questions = [
    {
      title: "Freizeit",
      subtitle: "Wofür ist der Aargau bekannt?",
      choices: [
        {text: "Wintersport", isCorrect: false, wasSelected: false},
        {text: "Land der Seen", isCorrect: false, wasSelected: false},
        {text: "Socken und Rüebli", isCorrect: true, wasSelected: false},
        {text: "Hohe Berge", isCorrect: false, wasSelected: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    },
    {
      title: "Unterhaltung",
      subtitle: "Wie gröss is das Wanderwegnetzt des kanton Aargau?",
      choices: [
        {text: "5 Kilometer", isCorrect: false, wasSelected: false},
        {text: "540 Kilometer", isCorrect: false, wasSelected: false},
        {text: "1'630 Kilometer", isCorrect: true, wasSelected: false},
        {text: "12'530 Kilometer", isCorrect: false, wasSelected: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    },
    {
      title: "Interessenpunkte",
      subtitle: "Wann wurde das Schloss Lenzburg gebaut?",
      choices: [
        {text: "vor dem Christus", isCorrect: false, wasSelected: false},
        {text: "im 12. Jahrhundert", isCorrect: true, wasSelected: false},
        {text: "im 16. Jahrhundert", isCorrect: false, wasSelected: false},
        {text: "im 18. Jahrhundert", isCorrect: false, wasSelected: false},
      ],
      answer: "Weisse Socken und die Rüeblitorte machen den Kanton berühmt. Zum Glück gibt es aber noch einiges mehr zu sehen."
    }
  ]


  return(

    <div className='question-container'>
      <div className='label'>
        <EntryLabel text={questions[0].title}/>
        <HoverPoint className={'hover-point'}
                    mouseClicked={() => setIsOpen(!isOpen)}/>
      </div>
      <Quiz question={questions[0]} className={isOpen ? 'open' : 'closed'}/>
    </div>


  )

}
