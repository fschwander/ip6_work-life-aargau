import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './VideoFullScreen.scss';

interface FullScreenVideoProps {
  source:string
}

export class VideoFullScreen extends Component<FullScreenVideoProps> {

  constructor(props: FullScreenVideoProps) {
    super(props);

    this.state = {
      isPlaying: false
    }
  }

  render() {
    return(
      <div className='VideoFullScreen'>
        <ReactPlayer className='player full-screen'
                     url={this.props.source}
                     playing muted loop playsinline/>
      </div>
    )
  }
}
