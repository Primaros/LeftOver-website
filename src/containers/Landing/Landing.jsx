import React from 'react';
import { Button } from 'react-bulma-components/full';
import TextyAnim from 'rc-texty';
import TextAnime from '../../components/TextAnime';
import './Landing.css';

const Landing = () => (
  <div className="background-image">
    <div className="page-shadow">
      <div className="landing">
        <div className="center">
          <TextyAnim
            className="title"
            type="mask-top"
            mode="random"
            interval={400}
          >
            LeftOver
          </TextyAnim>
          <div className="subTitle">
            <TextAnime base=" " texts={[['Hey !', 2], ['Pssst', 2], ['Hungry ?', 3], ['Let\'s cook !', 0], ['Don\'t let your food sleep in the fridge', 0], ['No more leftover', 0], ['Eat well, Eat, Eat everything !', 0]]} />
          </div>
          <Button color="success" size="large" rounded outlined>Let&apos;s check your fridge !</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
