const redux = require('redux');

const reducerFn = (state = {counter:0},action) => {
    if(action.type === 'increment') return {
        counter:state.counter+1
    };
    if(action.type === 'decrement') return {
        counter:state.counter-1
    }
    return state;
}

const store = redux.createStore(reducerFn);
// console.log(store.getState());
const counterSubscriber = () => {
    const counter = store.getState();
    console.log(counter);
}
store.subscribe(counterSubscriber);
store.dispatch({type:'increment'}); 
store.dispatch({type:'decrement'});