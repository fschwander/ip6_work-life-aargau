import React, {Component} from "react";
import './RoundButton.scss'

interface RoundButtonProps {
  size: string,
  onClick: Function,
  isActive?: boolean,
  icon?: string,
  text?: string,
  optionalText?: string
}

export class RoundButton extends Component<RoundButtonProps> {

  constructor(props: RoundButtonProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.isActive) {
      return;
    }
    this.props.onClick()
  }

  render() {
    return (
      <div className={`RoundButton button ${this.props.isActive ? 'enabled' : 'disabled'}`}
           style={{width: this.props.size, height: this.props.size}}
           onClick={this.handleClick}>
        <img src={this.props.icon} alt='icon'/>
        <p>{this.props.text}</p>
        <p><i>{this.props.optionalText}</i></p>
      </div>
    )
  }
}
