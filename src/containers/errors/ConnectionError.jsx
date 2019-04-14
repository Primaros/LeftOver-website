import React from 'react';
import PropTypes from 'prop-types';
import ButtonSwag from '../../components/ButtonSwag/ButtonSwag';
import { ReactComponent as MilkSvg } from '../../components/Milk.svg';
import './ConnectionError.css';

const CodeError = ({ history }) => (
  <div className="screen-size page center">
    <div className="row white center">
      <MilkSvg width="500px" height="500px" />
      <div className="row white center">
        <div>
          <h1 className="white">YYYYYYYYYYYYYY</h1>
          <h2 className="white">The page you are looking for is not avaiable</h2>
          <ButtonSwag text="Back to Home" style={{ height: '70px', fontSize: '2em', margin: '5%' }} onClick={() => history.push('/')} />
        </div>
      </div>
    </div>
  </div>
);

CodeError.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default CodeError;
