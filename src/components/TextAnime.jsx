import PropTypes from 'prop-types';
import TextyAnim from 'rc-texty';
import React from 'react';

export default class TextAnime extends React.PureComponent {
  constructor(props) {
    super(props);
    const { texts } = this.props;
    this.texts = texts;
    this.state = {
      show: true,
      text: '',
    };
    this.id = 0;
  }

  componentDidMount() {
    setTimeout(() => { this.switchtext(); }, 1500);
  }

  switchtext = () => {
    const { show } = this.state;

    if (show) {
      this.setState({ show: false, text: '' });
      setTimeout(() => { this.switchtext(); }, 1200);
    } else {
      this.id = (this.id + 1) % this.texts.length;
      this.setState({
        text: this.texts[this.id],
        show: true,
      });
      setTimeout(() => { this.switchtext(); }, 10000);
    }
  }

  render() {
    const { text } = this.state;
    return (
      <TextyAnim
        type="mask-top"
        mode="smooth"
      >
        { text }
      </TextyAnim>
    );
  }
}

TextAnime.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};
