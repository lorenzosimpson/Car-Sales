// action suite - 3 things
// 1. action creators - function that creates actions (returns action objects)
// 2. action types - variables that contain the action type strings to save us from spelling errors
// 3. actions - objects that describe to the reducer what event has occured and how it should update state

export const UPDATE_PRICE = 'UPDATE_PRICE';
export const updatePrice = price => ({ type: UPDATE_PRICE, payload: price})



export const ADD_FEATURE  = 'ADD_FEATURE'; // references string via variable to avoid mispellings
export const addFeature = () => ({ type: ADD_FEATURE, payload: null});