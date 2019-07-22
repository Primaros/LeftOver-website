import React from 'react';
import { Button } from 'react-bulma-components/full';
import { withRouter } from 'react-router-dom';
import TextyAnim from 'rc-texty';
import TextAnime from '../../components/TextAnime';
import './Landing.css';

const dispayTexts = [['Hey !', 2], ['Pssst', 2], ['Hungry ?', 3], ['Let\'s cook !', 0], ['No more food waisting', 0], ['No more leftovers', 0], ['Eat well, be efficient !', 0]];

const Landing = withRouter(({ history }) => (
  <div className="background-image screen-size">
    <div className="page-shadow landing">
      <TextyAnim
        className="title"
        type="mask-top"
        mode="random"
        interval={400}
      >
        LeftOver
      </TextyAnim>
      <div className="subTitle">
        <TextAnime base="^o^" texts={dispayTexts} />
      </div>
      <Button color="success" size="normal" rounded outlined onClick={() => history.push('/leftover/ingredients')}>Let&apos;s check your fridge !</Button>
    </div>
  </div>
));

export default Landing;
