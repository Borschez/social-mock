import React from 'react';

export const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export class FRParent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleButtonClick = (e) => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.handleButtonClick}>Focus on Input</button>
      </div>
    );
  }
}
