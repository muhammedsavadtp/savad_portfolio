import { createSlice } from '@reduxjs/toolkit'



const navSlice = createSlice({
    name: 'navSlice',
    initialState: {
        menu:false
    },
    reducers: {
        setMenu : (state, action) => {
            state.menu = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMenu } = navSlice.actions

export default navSlice.reducer