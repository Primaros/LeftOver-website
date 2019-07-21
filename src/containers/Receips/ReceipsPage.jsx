import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MyPagination from '../../components/Pagination';
import ReceipListItem from '../../components/ReceipListItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import ButtonSwag from '../../components/ButtonSwag/ButtonSwag';

class ReceipsPage extends React.PureComponent {
  static propTypes = {
    ingredients: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired),
    ).isRequired,
    history: PropTypes.shape({
      length: PropTypes.number.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.dbReceips = [];
    this.mounted = true;
    this.nbIngredientPage = 15;
    this.state = {
      list: [],
      error: '',
      page: 0,
    };
  }

  componentDidMount() {
    const { ingredients } = this.props;
    this.mounted = true;
    this.getReceips(ingredients);
  }

  componentWillReceiveProps(nextProps) {
    const { ingredients } = this.props;
    if (nextProps.ingredients !== ingredients) {
      this.getReceips(nextProps.ingredients);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getReceips = (ingredients) => {
    let request = 'https://leftoverjs.herokuapp.com/dishes?ing=';
    for (let i = 0; i < ingredients.length; i += 1) {
      request += `${ingredients[i].name},`;
    }
    request = request.slice(0, -1);
    fetch(request)
      .then(response => response.json())
      .then((response) => {
        if (this.mounted) {
          this.dbReceips = response.dishes;
          this.setState({ list: response.dishes });
        }
      })
      .catch(() => { this.setState({ error: true }); });
  }

  getReceipsList = list => (
    <div className="list">
      {list.map(item => (
        <div key={item.name}>
          <ReceipListItem key={item.name} item={item} handler={this.onPlatClick} />
        </div>
      ))}
    </div>
  )

  getPage = (ingredients, list, page) => {
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

  onPlatClick = (name) => {
    const { history } = this.props;
    history.push(`dish/${name}`);
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
    const { list, error, page } = this.state;
    const { history, ingredients } = this.props;
    const size = (!list) ? 0 : list.length / this.nbIngredientPage;
    if (error) {
      return (<Redirect to="/connectionerror" />);
    }
    return (
      <div>
        <div className="row center">
          <h2>Choose a receip</h2>
        </div>
        <div className="row" style={{ marginBottom: 20 }}>
          <ButtonSwag text="Back to ingredients" style={{ marginLeft: '3%' }} onClick={() => history.push('ingredients')} />
          <SearchBar holder="Search receip..." changeHandler={this.filter} />
        </div>
        { list && this.getReceipsList(this.getPage(ingredients, list, page)) }
        <div style={{ marginBottom: 15, marginLeft: 30 }}>
          <MyPagination
            nbPage={size}
            currentPage={page + 1}
            handler={(newPage) => { this.setState({ page: newPage - 1 }); }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ingredients: state.ingredients.list });

export default connect(mapStateToProps)(ReceipsPage);
