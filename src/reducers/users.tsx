import { ADD_USER, REMOVE_USER, UPDATE_USER, CHANGE_LOGGED_USER, LOGOUT_USER } from "../actions/actions";

const users = (state = {}, action: any) => {
    switch (action.type) {
        case ADD_USER: {
            //add user to state
            break;
        }

        case REMOVE_USER: {
            //remove user from state
            break;
        }

        case UPDATE_USER: {
            //update user in state
            break;
        }

        case CHANGE_LOGGED_USER: {
            //save the user details of the one who's logged in
            console.log(action.user);
            return {...state, currentUser: action.user}
        }

        case LOGOUT_USER: {
            //logout the current user

        }

        default:
            return state;
    }
}

export default users;