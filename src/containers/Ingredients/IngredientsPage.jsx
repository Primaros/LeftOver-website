import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IngredientListItem from '../../components/IngredientListItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import ButtonSwag from '../../components/ButtonSwag/ButtonSwag';
import { getBDDIngredients } from '../../APIManager';

const IngerdientList = ({ list, ingredients }) => (
  <div className="list">
    {list.map((item, index) => {
      for (let i = 0; i < ingredients.length; i += 1) {
        if (ingredients[i].name.toLowerCase() === item.name.toLowerCase()) {
          return '';
        }
      }
      return (
        <div key={item.name + index.toString()} className="elem-3col">
          <IngredientListItem key={item.name} item={item} />
        </div>
      );
    })}
  </div>
);

IngerdientList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)).isRequired,
};

class IngredientsPage extends React.PureComponent {
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
    this.dbIngredients = [];
    this.getIngredients();
    this.state = {
      list: this.dbIngredients,
      error: '',
    };
  }

  getIngredients = () => {
    getBDDIngredients()
      .then((list) => {
        this.dbIngredients = list;
        this.setState({ list });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  filter = (text) => {
    if (text) {
      const lowerText = text.toLowerCase();
      const list = this.dbIngredients.filter(item => (
        item.name.toLowerCase().includes(lowerText)
      ));
      this.setState({ list });
    } else {
      this.setState({ list: this.dbIngredients });
    }
  };

  render() {
    const { list, error } = this.state;
    const { ingredients, history } = this.props;
    return (
      <div>
        <div className="row center">
          <h2>Choose your ingredients</h2>
        </div>
        <div className="row">
          <SearchBar holder="Search ingredient..." changeHandler={this.filter} />
          { ingredients.length > 0
            ? <ButtonSwag text="Check the recipes !" style={{ marginRight: '3%' }} onClick={() => history.push('receips')} />
            : <ButtonSwag text="Check the recipes !" style={{ marginRight: '3%' }} onClick={() => history.push('receips')} disabled /> }
        </div>
        { error ? <p>{error}</p>
          : <IngerdientList list={list} ingredients={ingredients} /> }
      </div>
    );
  }
}

const mapStateToProps = state => ({ ingredients: state.ingredients.list });

export default connect(mapStateToProps)(IngredientsPage);
