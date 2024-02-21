import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    error: null,
    currentUser: null,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
            state.error=null;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.playload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.loading=false;
            state.error=action.playload;
        },
},
});
export const {signInStart,signInSuccess,signInFailure}  = userSlice.actions;
export default userSlice.reducer;