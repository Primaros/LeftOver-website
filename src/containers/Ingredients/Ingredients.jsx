import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bulma-components/full';
import IngredientNavbar from '../../components/Navbar/IngredientNavbar';
import Ingredient from '../../components/Ingredient';

const IngerdientList = ({ list }) => (
  <div className="list-2col">
    {list.map(item => (
      <div className="elem-2col">
        <Ingredient key={item.name} name={item.name} pic={item.pic} />
      </div>
    ))}
  </div>
);

class IngredientsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.dbIngredients = [{ name: 'Tomate', pic: 'Tomate' }, { name: 'Tomate', pic: 'Tomate' },
      { name: 'Tomate', pic: 'Tomate' }, { name: 'Tomate', pic: 'Tomate' }, { name: 'Tomate', pic: 'Tomate' }];
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
    } else {
      this.setState({ list: this.dbIngredients });
    }
  };

  render() {
    const { list } = this.state;
    return (
      <div className="page">
        <IngredientNavbar chHandle={this.filter} />
        <Container>
          <IngerdientList list={list} />
        </Container>
      </div>
    );
  }
}

IngerdientList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.string)).isRequired,
};

export default IngredientsPage;
