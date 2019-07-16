import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT } from "../actions/actions";

const events = (state =[], action: any) => {
    switch (action.type) {
        case ADD_EVENT: {
            //add event to state
            break;
        }

        case REMOVE_EVENT: {
            //remove event from state
            break;
        }

        case UPDATE_EVENT: {
            //update EVENT in state
            break;
        }

        default:
            return state;
    }
}

export default events;