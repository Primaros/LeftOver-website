import React from 'react';
import PropTypes from 'prop-types';
import { getBDDPlat } from '../../APIManager';
import ButtonSwag from '../../components/ButtonSwag/ButtonSwag';
import './DishPage.css';

class DishPage extends React.PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { match } = this.props;
    const { name } = match.params;
    this.state = {
      name,
      pic: '',
      ingredients: [],
      steps: [],
      time: '',
      error: '',
    };
    this.getPlat(name);
  }

  getPlat = (name) => {
    getBDDPlat(name)
      .then((item) => {
        this.setState({
          ...item,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const {
      quantity, name, pic, ingredients, steps, time, error,
    } = this.state;
    const { history } = this.props;
    return (
      <div className="dish">
        <section className="row dish-top">
          <ButtonSwag text="Back to receips" style={{ marginLeft: '3%' }} onClick={() => history.push('../receips')} />
          <h1>{name}</h1>
        </section>
        { error && <p>{error}</p>}
        <section className="dish-middle">
          <img className="image" src={pic} alt={pic} />
          <article className="sub-middle">
            <p>
              Personnes:
              {quantity}
            </p>
            <p>
              Time:
              {time}
            </p>
          </article>
        </section>
        <section className="dish-bottom">
          <article className="dish-ingredientsList">
            <ul>
              <p className="text-title">Ingredients</p>
              { ingredients.map((item, index) => (
                <li className={`li-${index % 2}`}>
                  <img src={item.pic} alt={item.name} />
                  <p className="text">{item.name}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="dish-steps">
            <p className="text-title">Steps</p>
            <ul>
              { steps.map((item, index) => (
                <li className={`li-${index % 2}`}>
                  <p className="text">{item}</p>
                </li>
              )) }
            </ul>
          </article>
        </section>
      </div>
    );
  }
}

DishPage.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
}

export default DishPage;
