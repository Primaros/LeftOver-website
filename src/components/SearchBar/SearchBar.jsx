import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.textInput = React.createRef();
  }

  onTextChange = (text) => {
    const { changeHandler } = this.props;
    changeHandler(text);
    this.setState({ text });
  }

  buttonPress = () => {
    const { text } = this.state;
    if (text) {
      this.setState({ text: '' });
    }
    this.textInput.current.focus();
  }

  render() {
    const { text } = this.state;
    const { holder } = this.props;
    return (
      <div className="searchBar">
        <input placeholder={holder} className="searchBar-input" type="text" value={text} ref={this.textInput} onChange={event => (this.onTextChange(event.target.value))} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  holder: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
