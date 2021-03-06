import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MyPagination from '../../components/Pagination';
import IngredientListItem from '../../components/IngredientListItem';
import SearchBar from '../../components/SearchBar/SearchBar';

const IngerdientList = ({ list }) => (
  <div className="list">
    {list.map((item, index) => (
      <div key={item.name + index.toString()} className="elem-3col">
        <IngredientListItem key={item.name} item={item} />
      </div>
    ))}
  </div>
);

IngerdientList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)).isRequired,
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
    this.nbIngredientPage = 30;
    this.state = {
      list: this.dbIngredients,
      page: 0,
      error: false,
    };
  }

  componentDidMount() {
    this.getIngredients();
  }

  getIngredients = () => {
    fetch('https://leftoverjs.herokuapp.com/ingredients')
      .then(response => response.json())
      .then((response) => {
        this.dbIngredients = response.ingredients;
        this.setState({ list: response.ingredients });
      })
      .catch(() => { this.setState({ error: true }); });
  }

  getPage = (ingredients, list, page) => {
    if (!list) {
      return [];
    }
    let subList = list.slice(0).splice(page * this.nbIngredientPage, this.nbIngredientPage * 2);
    subList = subList.filter((item) => {
      for (let i = 0; i < ingredients.length; i += 1) {
        if (ingredients[i].name.toLowerCase() === item.name.toLowerCase()) {
          return false;
        }
      }
      return true;
    });
    subList = subList.splice(0, this.nbIngredientPage);
    return (subList);
  }

  onPageChange = (page) => {
    this.setState({ page });
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
    const { list, error, page } = this.state;
    const { ingredients, history } = this.props;
    if (error) {
      return (<Redirect to="/connectionerror" />);
    }
    return (
      <div>
        <div className="row center">
          <h2 className="title is-primary">What's left in the fridge?</h2>
        </div>
        <div className="searchArea">
          <SearchBar holder="Search ingredient . . ." changeHandler={this.filter} />
          { ingredients.length > 0
            ? <button className="check-button" type="button" onClick={() => history.push('receips')}> Check the recipes ! </button>
            : <button className="check-button-disabled" type="button" onClick={() => history.push('receips')}> Check the recipes ! </button> }
        </div>
        <IngerdientList list={this.getPage(ingredients, list, page)} />
        <div style={{ marginBottom: 15, marginLeft: 30 }}>
          <MyPagination
            nbPage={list.length / this.nbIngredientPage}
            currentPage={page + 1}
            handler={(newPage) => { this.setState({ page: newPage - 1 }); }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ingredients: state.ingredients.list });

export default connect(mapStateToProps)(IngredientsPage);
