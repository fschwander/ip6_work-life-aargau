import React, {Component} from 'react';
import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_905.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_905.svg'

interface SlideProps {}

interface SlideState {
  isActive: boolean
}

export class Slide01 extends Component<SlideProps, SlideState> {
  constructor(props: SlideProps) {
    super(props);

    this.state = {
      isActive: false
    }
  }

  render() {
    const rootStyle = {backgroundImage: `url(${bgImage})`}
    const rootClass = 'Slide01 slide slide-element full-screen ' + (this.state.isActive ? 'isActive':'')

    return (
      <div className={rootClass}
           style={rootStyle}>
        <h3>Willkomen bei</h3>
        <h2>Work-Life Aargau</h2>
        <h1>Eine interaktive Platform über den Kanton Aargau</h1>
        <SVGStrokeAnimation svgComponent={SVGImage}/>
      </div>
    )
  }

  componentDidMount(): void {
    this.setState({isActive: true})
  }

  componentWillUnmount(): void {
    this.setState({isActive:false})
  }
}
