class Actions {
  addToCart = (id: number) => {
    console.log('__addToCart', id);
  };
  addToFavorite = (id: number) => {
    console.log('__addToFavorite', id);
  };
}

const actions = new Actions();
export default actions;
