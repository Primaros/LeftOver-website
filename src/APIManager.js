import PropTypes from 'prop-types';

const getBDDPlats = ({ ingredients }) => (
  new Promise((resolve, reject) => {
    const list = [{
      name: 'Bolognaise',
      pic: 'https://hips.hearstapps.com/hmg-prod/images/delish-bolognese-horizontal-1-1540572556.jpg',
      ingredients: [ingredients],
      steps: ['step 1', 'step 2'],
      time: '4h',
    }];
    if (list) {
      resolve(list);
    } else {
      reject(new Error('No item received from bdd'));
    }
  })
);

const getBDDPlat = (platName) => {
  return (
    new Promise((resolve, reject) => {
      const plat = {
        name: platName,
        pic: 'https://hips.hearstapps.com/hmg-prod/images/delish-bolognese-horizontal-1-1540572556.jpg',
        ingredients: [{ name: 'Tomate', pic: 'https://i.pinimg.com/originals/ae/e8/55/aee855647906b228a05cd4c4588e5a00.png' }],
        steps: ['step 1', 'step 2'],
        time: '4h',
        quantity: 4,
      };
      if (plat) {
        resolve(plat);
      } else {
        reject(new Error('No item received from bdd'));
      }
    })
  );
};

getBDDPlats.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export { getBDDPlats, getBDDPlat };
