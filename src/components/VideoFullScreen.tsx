import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import {Spinner} from 'reactstrap';
import './VideoFullScreen.scss';

interface FullScreenVideoProps {
  source: string
}

interface VideoFullScreenState {
  isPlaying: boolean,
  isBuffering: boolean
}

export class VideoFullScreen extends Component<FullScreenVideoProps, VideoFullScreenState> {

  constructor(props: FullScreenVideoProps) {
    super(props);

    this.state = {
      isPlaying: false,
      isBuffering: true
    };

    this.onReady = this.onReady.bind(this)
  }

  onReady() {
    console.log('on ready...');
    this.setState({isBuffering: false})
  }

  render() {
    return (
      <div className='VideoFullScreen full-screen'>
        <div className='loading-container' style={{opacity: this.state.isBuffering ? 1 : 0}}>
          <Spinner color='light'/>
          <p>Einen Moment, bitte...</p>
        </div>

        <ReactPlayer className='player'
                     url={this.props.source}
                     playing muted loop playsinline
                     onReady={this.onReady}
                     width='100%'
                     height='100%'/>
      </div>
    )
  }
}
