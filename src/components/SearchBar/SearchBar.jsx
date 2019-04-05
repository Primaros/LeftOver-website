import React from 'react';
import PropTypes from 'prop-types';
import FaSearch from 'react-icons/lib/fa/search';
import FaClose from 'react-icons/lib/fa/close';
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
        <button className="searchBar-button" type="button" onClick={this.buttonPress} style={{ backgroundColor: '#2C3E50' }}>
          {
            text ? <FaClose size={20} style={{ color: '#5D6D7E' }} />
              : <FaSearch style={{ color: '#5D6D7E' }} />
          }
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  holder: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
