import { ADD_USER, REMOVE_USER, UPDATE_USER, CHANGE_LOGGED_USER, LOGOUT_USER } from "../actions/actions";
import { IUserStore } from "../components/common/interfaces";

const initialUserState: IUserStore = {
    allUsers: []
}

const users = (state: IUserStore = initialUserState, action: any) => {
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
            return {...state, currentUser: action.user}
        }

        case LOGOUT_USER: {
            //logout the current user
            return {...state, currentUser: null}
        }

        default:
            return state;
    }
}

export default users;