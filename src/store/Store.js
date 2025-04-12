import {configureStore} from '@reduxjs/toolkit'
import cart from './Cartslice.js'

export const store = configureStore({
    reducer: {
        cart : cart,
    },
  })