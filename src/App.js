import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor (props) {
      super(props)
      this.state = ({
        selected: ''
      })
  }

  handleMouse = () => {
  if (window.getSelection()) {
    this.setState({
      selected: window.getSelection().toString()
    })
  }
  }

  render() {
    return (
      <div className="Home">
        <h1>Text Selection Tester</h1>
        <p onMouseUp={this.handleMouse}>The bobs anagram defects on top of the related vinyl. His disappointing fashion yawns within every compulsory kingdom. The separator charts the sunk panic near every anniversary. Can the happier touch fly across the heritage? A polar bandwagon refunds the venture. When can our backspace prohibit the operator? How can an invented parody elaborate beneath the verb? A goodbye regains the groan.</p>

        <h2><strong>Selected Text :</strong> {this.state.selected}</h2>

        <p>Check out the repo : <a href ="https://www.github.com/arnondora/selected-text-getter">https://www.github.com/arnondora/selected-text-getter</a></p>
        <p>Code with love by <a href="https://www.arnondora.in.th">@arnondora</a></p>
      </div>
    );
  }
}
