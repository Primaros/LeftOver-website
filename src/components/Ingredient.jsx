import React from 'react';
import PropTypes from 'prop-types';
import {
  Media,
  Image,
  Content,
  Button,
} from 'react-bulma-components/full';

const Ingredient = ({ name, pic }) => (
  <Media style={{ margin: '2%' }}>
    <Media.Item renderAs="figure" position="left">
      <Image size={64} alt="64x64" src="https://i.pinimg.com/originals/ae/e8/55/aee855647906b228a05cd4c4588e5a00.png" />
    </Media.Item>
    <Media.Item>
      <Content>
        <p style={{ marginBottom: '1%' }}>
          <strong>{name}</strong>
          {pic}
        </p>
        <p>
          <Button color="success" size="small" rounded>I have some !</Button>
        </p>
      </Content>
    </Media.Item>
  </Media>
);

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

export default Ingredient;
