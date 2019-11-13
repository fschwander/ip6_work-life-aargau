import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './FullScreenVideo.scss';

interface FullScreenVideoProps {
  source:string
}

export class FullScreenVideo extends Component<FullScreenVideoProps> {

  constructor(props: FullScreenVideoProps) {
    super(props);

    this.state = {
      isPlaying: false
    }
  }

  render() {
    return(
      <div className='FullScreenVideo'>
        <ReactPlayer className='player full-screen'
                     url={this.props.source}
                     playing loop playsinline/>
      </div>
    )
  }
}
