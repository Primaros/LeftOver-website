import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tag } from 'react-bulma-components/full';
import './IngredientsCollector.css';
import { removeIngredients } from '../../redux/actions/ingredientsActions';

const Ingredient = ({ name, picture, index }) => (
  <div className="ingredient">
    <img className="ingredient-image rounded" size={64} alt={name} src={picture} />
    <div className="ingredient-remove">
      <Tag rounded remove color="danger" onClick={() => { removeIngredients(index); }} />
    </div>
  </div>
);

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const IngredientsCollector = ({ ingredients }) => (
  <div className="ingredientsCollector rounded">
    <h2 style={{ textAlign: 'center' }}>Your fridge</h2>
    <div className="ingredientsCollector-content rounded">
      { ingredients.map((item, index) => (
        <Ingredient key={item.name} {...item} index={index} />
      ))}
    </div>
  </div>
);

IngredientsCollector.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = state => ({ ingredients: state.ingredients.list });

export default connect(mapStateToProps)(IngredientsCollector);
