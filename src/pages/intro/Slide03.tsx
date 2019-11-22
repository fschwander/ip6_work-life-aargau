import React, {Component} from 'react';
import {RectButton} from '../../components/RectButton';
import {SVGStrokeAnimation} from '../../components/SVGStrokeAnimation';
import bgImage from '../../res/imgs/galerie_picture_974.jpg'
import {ReactComponent as SVGImage} from '../../res/imgs/galerie_picture_974.svg'

interface SlideProps {
  isActive: boolean
}

interface SlideState {
  isActive: boolean
}

export class Slide03 extends Component<SlideProps, SlideState> {
  constructor(props: SlideProps) {
    super(props);

    this.state = {
      isActive: false
    }
  }

  redirectToMainPage() {

  }

  render() {
    const rootStyle = {backgroundImage: `url(${bgImage})`}
    const rootClass = 'Slide03 slide slide-element full-screen ' + (this.state.isActive ? 'isActive' : '')

    return (
      <div className={rootClass}
           style={rootStyle}>

        <SVGStrokeAnimation svgComponent={SVGImage} isActive={this.props.isActive}/>

        <RectButton className='go-to-main-button'
                    text='Abenteuer starten'
                    isActive={true}
                    onClick={this.redirectToMainPage}/>
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
