import React, {Component} from 'react';
import bgImage from '../../res/imgs/galerie_picture_966.jpg'

interface SlideProps {
}

interface SlideState {
  isActive: boolean
}

export class Slide02 extends Component<SlideProps, SlideState> {
  constructor(props: SlideProps) {
    super(props);

    this.state = {
      isActive: false
    }
  }

  render() {
    const rootStyle = {backgroundImage: `url(${bgImage})`}
    const rootClass = 'Slide02 slide slide-element full-screen ' + (this.state.isActive ? 'isActive' : '')

    return (
      <div className={rootClass}
           style={rootStyle}>
      </div>
    )
  }

  componentDidMount(): void {
    this.setState({isActive: true})
  }

  componentWillUnmount(): void {
    this.setState({isActive: false})
  }
}
