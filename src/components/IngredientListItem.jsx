import React from 'react';
import PropTypes from 'prop-types';
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
    <Media style={{ margin: '2%', backgroundColor: 'white' }}>
      <Media.Item renderAs="figure" position="left">
        <Image size={64} alt="64x64" src={picture} />
      </Media.Item>
      <Media.Item>
        <Content>
          <p style={{ marginBottom: '1%' }}>
            <strong>{name}</strong>
          </p>
          <p>
            <Button color="success" size="small" rounded onClick={() => addIngredients(item)}>I have some !</Button>
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
