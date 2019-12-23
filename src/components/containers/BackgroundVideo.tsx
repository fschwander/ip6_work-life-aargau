import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import {Spinner} from 'reactstrap';

interface FullScreenVideoProps {
  source: string,
  playVideo: boolean,
  onVideoEnded: Function
}

interface VideoFullScreenState {
  isPlaying: boolean,
  isBuffering: boolean
}

export class BackgroundVideo extends Component<FullScreenVideoProps, VideoFullScreenState> {

  constructor(props: FullScreenVideoProps) {
    super(props);

    this.state = {
      isPlaying: false,
      isBuffering: true
    };

    this.onReady = this.onReady.bind(this)
  }

  onReady() {
    this.setState({isBuffering: false})
  }

  render() {
    return (
      <div className='BackgroundVideo full-screen'>
        <div className='loading-container' style={{opacity: this.state.isBuffering ? 1 : 0}}>
          <Spinner color='light'/>
          <p>Einen Moment, bitte...</p>
        </div>

        <ReactPlayer className='player'
                     url={this.props.source}
                     playing={this.props.playVideo}
                     muted playsinline
                     onReady={this.onReady}
                     onEnded={() => this.props.onVideoEnded()}
                     width='100%'
                     height='100%'/>
      </div>
    )
  }
}
