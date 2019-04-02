import React from 'react';
import PropTypes from 'prop-types';
import IngredientNavbar from '../../components/Navbar/IngredientNavbar';
import SearchBar from '../../components/SearchBar';

const IngredientItem = ({ item: { name, pic }, index }) => (
  <div key={index}>
    <p>
      Name:
      <span>{ name }</span>
      Pic:
      <span>{ pic }</span>
    </p>
  </div>
);

const IngerdientList = ({ list }) => (
  <div>
    {list.map((item, index) => (
      <IngredientItem key={index.toString()} item={item} index={index} />
    ))}
  </div>
);

class IngredientsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.dbIngredients = [{ name: 'Tomate', pic: 'Tomate' }];
    this.state = {
      list: this.dbIngredients,
    };
  }

  filter = (text) => {
    if (text) {
      const lowerText = text.toLowerCase();
      const list = this.dbIngredients.filter(item => (
        item.name.toLowerCase().includes(lowerText)
      ));
      this.setState({ list });
    }
  };

  render() {
    const { list } = this.state;
    return (
      <div className="page">
        <IngredientNavbar />
        <SearchBar holder="Search ingredient..." changeHandler={this.filter} />
        <IngerdientList list={list} />
      </div>
    );
  }
}

IngredientItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string, PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

IngerdientList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)).isRequired,
};

export default IngredientsPage;
