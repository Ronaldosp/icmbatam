const initialState = {
    admins: []
};

export default function adminReducer(
    state = initialState,
    action
) {

    switch (action.type) {

        case "admins/get":

            return {
                ...state,
                admins: action.payload
            };

        default:

            return state;

    }

}