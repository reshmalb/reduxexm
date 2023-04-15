// import {configureStore,createSlice} from '@reduxjs/toolkit'


const redux = require ('redux');

const counterReducer = (state={counter:0}, action) =>{
    if(action.type==='increment'){
        return{
            counter: state.counter + 2
        };
    }
        if(action.type==='decrement'){
            return{
                counter: state.counter - 2
            };
        }
    
    return state;
};


const counterSubsriber= () => {
    const latestState = store.getState();
    console.log(latestState);
 };

const store = redux.createStore(counterReducer);
store.subscribe(counterSubsriber);
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})



// const counterSlice=createSlice({
//     name:'counter',
//     initial_state:0,
//     reducer:{
//         increment:(state)=>state+1,
//         decrement:(state)=>state-1
//     }
// });
// const store=configureStore({
//     reducer:counterSlice.reducer
// })
// store.dispatch(counterSlice.actions.increment())
