import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ITEMS = 'GET_ITEMS'

/**
 * INITIAL STATE
 */
const defaultItems = []

/**
 * ACTION CREATORS
 */
const gotItems = items => ({type: GET_ITEMS, items})

/**
 * THUNK CREATORS
 */
export const getItems = () => async dispatch => {
  try {
    console.log('???')
    const res = await axios.get('/api/items')
    dispatch(gotItems(res.data || defaultItems))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultItems, action) {
  switch (action.type) {
    case GET_ITEMS:
      return action.items
    default:
      return state
  }
}
