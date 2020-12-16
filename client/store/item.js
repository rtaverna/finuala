import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ITEMS = 'GET_ITEMS'
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS'

/**
 * INITIAL STATE
 */
const defaultItems = []

/**
 * ACTION CREATORS
 */
const gotItems = items => ({type: GET_ITEMS, items})
const gotCartItems = items => ({type: GET_CART_ITEMS, items})
const removedCartItems = items => ({type: REMOVE_CART_ITEMS, items})

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

export const getCartItems = () => async dispatch => {
  try {
    console.log('???')
    const res = await axios.get('/api/cart')
    dispatch(gotCartItems(res.data || defaultItems))
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = id => async dispatch => {
  try {
    console.log('???')
    const res = await axios.post(`/api/items/${id}`)
  } catch (err) {
    console.error(err)
  }
}

export const removeCartItem = id => async dispatch => {
  try {
    console.log('???')
    const res = await axios.post(`/api/cart/${id}`)
    dispatch(removedCartItems(res.data || defaultItems))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultItems, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return action.items
    case GET_ITEMS:
      return action.items
    case REMOVE_CART_ITEMS:
      return action.items
    default:
      return state
  }
}
