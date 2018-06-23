/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}


/**
 * Get rooms from static data
 */


import initialState from './data.js';

//const initialState = fromJS(data);


function calDay(state = initialState.calDay, action) {

  switch (action.type) {
    case 'ADD_CAL_DAY':
      return Object.assign({}, state, {
        calDay: state + 1
      }).calDay
    default:
      return state
  }

}

/**
 * Creates the main reducer with the dynamically injected ones
 */
// export default function createReducer(injectedReducers) {
//   return combineReducers({
//   route: routeReducer,
//   language: languageProviderReducer,
//   bookedRooms,
//   rooms,
//   availableRooms,
//   availableOffers,
//   availableAmenities,
//   currentMonth,
//   currentYear,
//   calDay,
//   firstDay: (state = initialState) => state,
//   lastDay: (state = initialState) => state,
//   hotels: (state = initialState) => state,
  

//    ...injectedReducers,
//   });
// }




export default combineReducers({


  bookedRooms:(state = initialState.bookedRooms)=>state,
  rooms:(state = initialState.hotels[0].rooms)=>state,
  availableRooms:(state = initialState.availableRooms)=>state,
  availableOffers:(state = initialState.availableOffers)=>state,
  availableAmenities:(state = initialState.availableAmenities)=>state,
  currentMonth:(state = initialState.currentMonth)=>state,
  currentYear:(state = initialState.currentYear)=>state,
  calDay,
  firstDay: (state = initialState.firstDay) => state,
  lastDay: (state = initialState.lastDay) => state,
  hotels: (state = initialState) => state,
  


});