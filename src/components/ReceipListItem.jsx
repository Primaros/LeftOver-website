import React from 'react';
import PropTypes from 'prop-types';
import {
  Media,
  Image,
  Content,
  Button,
} from 'react-bulma-components/full';

const ReceipListItemCSS = {
  media: {
    margin: '1%', backgroundColor: 'white', borderBottom: '1px #909497 solid',
  },
};

const ReceipListItem = ({ handler, item }) => {
  const {
    name, picture, steps, time,
  } = item;

  return (
    <Media style={ReceipListItemCSS.media}>
      <Media.Item renderAs="figure" position="left" style={{ height: 40 }}>
        <Image size={96} alt="64x64" src={picture} />
      </Media.Item>
      <Media.Item>
        <Content>
          <div className="row">
            <p style={{ marginBottom: '1%' }}>
              <strong>{name}</strong>
            </p>
          </div>
          <div className="row-space">
            <p>
              Number of steps:
              {steps.length}
            </p>
            <p>
              Time:
              {time}
            </p>
            <p>
              <Button color="success" size="small" rounded onClick={() => handler(name)}>Watch</Button>
            </p>
          </div>
        </Content>
      </Media.Item>
    </Media>
  );
};

ReceipListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string.isRequired),
    time: PropTypes.string.isRequired,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default ReceipListItem;
