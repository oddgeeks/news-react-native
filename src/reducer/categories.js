
const categories = ['technology', 'business', 'entertainment', 'gaming', 'general', 'health-and-medical', 'music', 'politics', 'science-and-nature', 'sport', 'technology'];

const categoryReducer = (state = { categories, currentCategory: categories[0] }, action) => {
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      if (categories.includes(action.routeName)) {
        return { ...state, currentCategory: action.routeName };
      }
      return state;
    default:
      return state;
  }
};

export default categoryReducer;

