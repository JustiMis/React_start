// selectors
export function getSearchString (state){
  return state.searchString
};

export const countAllCards = ({cards}) => cards.length;

export function countVisibleCards ({cards, searchString}){
  return cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length

};
  
// action name creator
const reducerName = 'SearchString'; // JAKI!?
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');
// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE: 
    return action.payload
    default:
      return statePart;
  }
}

