import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onTextChange = (text) => {
    const { changeHandler } = this.props;
    changeHandler(text);
    this.setState({ text });
  }

  render() {
    const { text } = this.state;
    const { holder } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="searchInput">
            <input placeholder={holder} id="searchInput" type="text" value={text} onChange={event => (this.onTextChange(event.target.value))} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  holder: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
