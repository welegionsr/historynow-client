import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT, BULK_ADD_EVENT } from "../actions/actions";
import { IHistoryEvent } from "../components/common/interfaces";

interface IEventsState {
    data: IHistoryEvent[];
}

const events = (state: IEventsState = {data: []}, action: any) => {
    switch (action.type) {
        case ADD_EVENT: {
            //add event to state
            break;
        }

        case BULK_ADD_EVENT: {
            //add an array of events to state
            let currentEvents = state.data || [];
            return {...state, data: [...currentEvents, ...action.events]};
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