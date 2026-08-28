const initialState={
    events :[],
}

export default function eventReducer(state=initialState , action){
    if(action.type === "events/get"){
        return {
            ...state,
            events : action.payload
        }
    }
    return state;
}