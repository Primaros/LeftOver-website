import React from 'react';
import PropTypes from 'prop-types';
import ButtonSwag from '../../components/ButtonSwag/ButtonSwag';
import { ReactComponent as MilkSvg } from '../../assets/pictures/Milk.svg';

const NotFound = ({ history }) => (
  <div className="screen-size page center">
    <div className="row white center">
      <MilkSvg width="500px" height="500px" />
      <div className="row white center">
        <div>
          <h1 className="white">404 Page not found</h1>
          <h2 className="white">The page you are looking for is not avaiable</h2>
          <ButtonSwag text="Back to Home" style={{ height: '70px', fontSize: '2em', margin: '5%' }} onClick={() => history.push('/')} />
        </div>
      </div>
    </div>
  </div>
);

NotFound.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotFound;
