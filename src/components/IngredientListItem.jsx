import React from 'react';
import PropTypes from 'prop-types';
import './ingredientListItem.css';
import {
  Media,
  Image,
  Content,
  Button,
} from 'react-bulma-components/full';
import { addIngredients } from '../redux/actions/ingredientsActions';

const IngredientListItem = ({ item }) => {
  const { name, picture } = item;
  return (
    <Media className="media">
      <Media.Item renderAs="figure" position="left">
        <Image className="image" alt="64x64" src={picture} />
      </Media.Item>
      <Media.Item>
        <Content>
          <p className="ingredient-title">
            {name}
          </p>
          <p>
            <Button className="button" color="success" onClick={() => addIngredients(item)}>I have some !</Button>
          </p>
        </Content>
      </Media.Item>
    </Media>
  );
};

IngredientListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default IngredientListItem;
