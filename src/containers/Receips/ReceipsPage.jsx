import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IngredientNavbar from '../../components/Navbar/IngredientNavbar';
import ReceipListItem from '../../components/ReceipListItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import ButtonSwag from '../../components/ButtonSwag/ButtonSwag';
import { getBDDPlats } from '../../APIManager';

const ReceipsList = ({ list }) => (
  <div className="list">
    {list.map(item => (
      <div key={item.name}>
        <ReceipListItem key={item.name} item={item} />
      </div>
    ))}
  </div>
);

ReceipsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pic: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          pic: PropTypes.string.isRequired,
        }),
      ),
      steps: PropTypes.arrayOf(PropTypes.string.isRequired),
      time: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

class ReceipsPage extends React.PureComponent {
  static propTypes = {
    ingredients: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string, PropTypes.string),
    ).isRequired,
    history: PropTypes.shape({
      length: PropTypes.number,
      search: PropTypes.string,
      hash: PropTypes.string,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    const { ingredients } = this.props;
    this.dbReceips = [];
    this.state = {
      list: [],
      error: '',
    };
    this.getReceips(ingredients);
  }

  componentWillReceiveProps(nextProps) {
    const { ingredients } = this.props;
    if (nextProps.ingredients !== ingredients) {
      this.getReceips(nextProps.ingredients);
    }
  }

  getReceips = (ingredients) => {
    getBDDPlats(ingredients)
      .then((list) => {
        this.dbReceips = list;
        this.setState({ list });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  filter = (text) => {
    if (text) {
      const lowerText = text.toLowerCase();
      const list = this.dbReceips.filter(item => (
        item.name.toLowerCase().includes(lowerText)
      ));
      this.setState({ list });
    } else {
      this.setState({ list: this.dbReceips });
    }
  };

  render() {
    const { list, error } = this.state;
    const { history } = this.props;
    return (
      <div className="page">
        <div className="page-content">
          <IngredientNavbar />
          <div className="row center">
            <h1>Choose a receip</h1>
          </div>
          <div className="row" style={{ marginBottom: 20 }}>
            <ButtonSwag text="Back to ingredients" style={{ marginLeft: '3%' }} onClick={() => history.push('ingredients')} />
            <SearchBar holder="Search receip..." changeHandler={this.filter} />
          </div>
          { error ? <p>{error}</p>
            : <ReceipsList list={list} /> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ingredients: state.ingredients.list });

export default connect(mapStateToProps)(ReceipsPage);
