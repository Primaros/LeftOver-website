import PropTypes from 'prop-types';
import TextyAnim from 'rc-texty';
import React from 'react';

export default class TextAnime extends React.PureComponent {
  constructor(props) {
    super(props);
    const { texts, base } = this.props;
    this.texts = texts;
    this.state = {
      show: true,
      text: base,
    };
    this.id = -1;
    this.interval = 50;
  }

  componentDidMount() {
    this.timerHandle = setTimeout(() => { this.switchtext(); }, 5000);
  }

  componentWillUnmount = () => {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  switchtext = () => {
    const { show } = this.state;

    if (show) {
      this.setState({ show: false, text: '' });
      this.timerHandle = setTimeout(() => { this.switchtext(); }, 100);
    } else {
      this.id = (this.id + 1) % this.texts.length;
      this.setState({
        text: this.texts[this.id][0],
        show: true,
      });
      const showTime = (typeof this.texts[this.id][1] !== 'undefined' && this.texts[this.id][1] !== 0) ? this.texts[this.id][1] * 1000 : 10000 - this.interval * this.texts[this.id][0].length;
      this.timerHandle = setTimeout(() => { this.switchtext(); }, showTime);
    }
  }

  render() {
    const { text } = this.state;
    return (
      <TextyAnim
        type="mask-top"
        mode="smooth"
        interval={this.interval}
      >
        { text }
      </TextyAnim>
    );
  }
}

TextAnime.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.array).isRequired,
  base: PropTypes.string.isRequired,
};
