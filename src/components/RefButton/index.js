import React from 'react';

class RefButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleSentClick = (e) => {
    console.log(this.buttonRef.current);
    this.buttonRef.current.textContent =
      this.buttonRef.current.textContent === 'Sending...'
        ? 'Sent'
        : 'Sending...';
  };

  render() {
    return (
      <button ref={this.buttonRef} onClick={this.props.handleSentClick}>
        {this.props.children}
      </button>
    );
  }
}

export default RefButton;
