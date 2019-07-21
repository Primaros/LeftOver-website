import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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
      picture: '',
      ingredients: [],
      steps: [],
      time: '',
      error: '',
    };
    this.mounted = true;
    this.getPlat(name);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  stringToIngredient = (str) => {
    const splitStr = str.split(',');
    const ingredients = splitStr.map((ingredientStr) => {
      const ingredient = { name: '', quantity: '', picture: '' };
      const ingredientSplitStr = ingredientStr.split(';');
      [ingredient.name, ingredient.quantity, ingredient.picture] = ingredientSplitStr;
      ingredient.quantity = ingredient.quantity === 'undefined' ? '' : ingredient.quantity;
      return ingredient;
    });
    return ingredients;
  }

  getPlat = (name) => {
    fetch(`https://leftoverjs.herokuapp.com/dishes/${name}`)
      .then(response => response.json())
      .then((response) => {
        const res = {
          ...response.dishes[0],
        };
        res.ingredients = this.stringToIngredient(res.ingredients);
        if (this.mounted) {
          this.setState({ ...res });
        }
      })
      .catch(() => { this.setState({ error: true }); });
  }

  render() {
    const {
      quantity, name, picture, ingredients, steps, time, error,
    } = this.state;
    const { history } = this.props;
    if (error) {
      return (<Redirect to="/connectionerror" />);
    }
    return (
      <div className="dish">
        <section className="row dish-top">
          <ButtonSwag text="Back to receips" style={{ marginLeft: '3%' }} onClick={() => history.push('../receips')} />
          <h1>{name}</h1>
        </section>
        <section className="dish-middle">
          <img className="image" src={picture} alt={picture} />
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
                <li key={index.toString()} className={`li-${index % 2}`}>
                  <img src={item.picture} alt={item.name} />
                  <p className="text">
                    {item.quantity}
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </article>
          <article className="dish-steps">
            <p className="text-title">Steps</p>
            <ul>
              { steps.map((item, index) => (
                <li key={index.toString()} className={`li-${index % 2}`}>
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
};

export default DishPage;
