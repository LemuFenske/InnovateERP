const { createSlice } = require("@reduxjs/toolkit")

export const Slice = createSlice({
    name: 'numeros',
    initialState:{numeros: [1, 2, 3]},
    reducers: {
        agregarNum: (state, action) => {
            state.numeros =[...state.numeros, action.payload];
        }
    }
})


export const {agregarNum} = Slice.actions;