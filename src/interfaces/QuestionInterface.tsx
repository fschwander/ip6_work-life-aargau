export interface QuestionInterface {
  title: string,
  subtitle: string,
  choices: Array<ChoiceInterface>,
  answer: string
}

export interface ChoiceInterface {
  text: string,
  isCorrect: boolean,
  wasSelected?: boolean,
  isActive?: boolean
}
