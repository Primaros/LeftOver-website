import React from 'react';
import { Button } from 'react-bulma-components/full';
import './Landing.css';
import TextAnime from '../../components/TextAnime';

const Landing = () => (
  <div className="background-image">
    <div className="page-shadow">
      <div className="landing">
        <div className="center">
          <p className="title">
            LeftOver
          </p>
          <div className="subTitle">
            <TextAnime texts={['Eat well, Eat, Eat everything !', 'Hungry ? Let\'s cook !', 'Don\'t let your food sleep in the fridge']} />
          </div>
          <Button color="success" size="large" rounded outlined>Let&apos;s check your fridge !</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
