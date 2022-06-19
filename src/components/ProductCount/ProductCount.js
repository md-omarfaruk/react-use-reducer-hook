import React, { useReducer } from 'react';


const initialstate = {count: 0};

const reducer = (state, action) => {
        switch (action.type){
            case "INCREMENT":
                return {count: state.count + 1};

            case "DECREMENT":
                        if(state.count > 0){
                            return{count: state.count -1}
                        }
                        else{
                            return {count: 0};
                        }
                // return {count: state.count - 1};
            
            default: return state;
        }
}

const ProductCount = () => {

    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <div>
            <h1>Count how many student Admitted: {state.count}</h1>
            <button onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
    );
};

export default ProductCount;