import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tag } from 'react-bulma-components/full';
import './IngredientsCollector.css';
import { removeIngredients } from '../../redux/actions/ingredientsActions';

const Ingredient = ({ name, pic }, index) => (
  <div className="ingredient">
    <img className="ingredient-image" size={64} alt={name} src={pic} />
    <div className="ingredient-remove">
      <Tag rounded remove color="danger" onClick={() => { removeIngredients(index); }} />
    </div>
  </div>
);

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

const IngredientsCollector = ({ ingredients }) => (
  <div className="ingredientsCollector">
    { ingredients.map((item, index) => (
      (<Ingredient key={item.name} {...item} index={index} />)
    ))}
  </div>
);

IngredientsCollector.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired,
    PropTypes.string.isRequired).isRequired).isRequired,
};

const mapStateToProps = state => ({ ingredients: state.ingredients.list });

export default connect(mapStateToProps)(IngredientsCollector);
