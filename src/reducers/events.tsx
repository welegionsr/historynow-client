import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT, BULK_ADD_EVENT } from "../actions/actions";
import { IEventStore } from "../components/common/interfaces";

const initialEventState: IEventStore = {
    allEvents: [],
    wishlistEvents: []
}

const events = (state: IEventStore = initialEventState, action: any) => {
    switch (action.type) {
        case ADD_EVENT: {
            //add event to state
            break;
        }

        case BULK_ADD_EVENT: {
            //add an array of events to state
            let existingEvents = state.allEvents || [];
            return {...state, allEvents: [...existingEvents, ...action.events]};
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