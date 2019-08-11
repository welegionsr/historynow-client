import {
  ADD_EVENT,
  REMOVE_EVENT,
  UPDATE_EVENT,
  BULK_ADD_EVENT,
  CHANGE_WISHLIST,
  GET_USER_WISHLIST
} from "../actions/actions";
import { IEventStore } from "../components/common/interfaces";

const initialEventState: IEventStore = {
  allEvents: [],
  wishlist: []
};

const events = (state: IEventStore = initialEventState, action: any) => {
  switch (action.type) {
    case ADD_EVENT: {
      //add event to state
      let existingEvents = state.allEvents || [];
      return { ...state, allEvents: [...existingEvents, action.event] };
    }

    case BULK_ADD_EVENT: {
      //add an array of events to state
      let existingEvents = state.allEvents || [];
      return { ...state, allEvents: [...existingEvents, ...action.events] };
    }

    case REMOVE_EVENT: {
      let eventsAfterRemoval = state.allEvents.filter(
        event => event._id !== action.eventId
      );
      return { ...state, allEvents: eventsAfterRemoval };
    }

    case UPDATE_EVENT: {
      //find index of the event being updated
      console.log(action.event)
      let eventIndex = state.allEvents.findIndex(
        event => event._id === action.event._id
      );
      console.log("trying to update store, the index found is: ", eventIndex);
      console.log("updated event details:");
      console.log(action.event);
      //create new array of events to push to store
      let eventsAfterUpdate = state.allEvents;
      //put the updated event in place of the old one
      eventsAfterUpdate[eventIndex] = action.event;
      return { ...state, allEvents: eventsAfterUpdate };
    }

    case CHANGE_WISHLIST: {
      const eventId = action.eventId;
      let currentWishlist = state.wishlist;
      if (currentWishlist.find(event => eventId === event))
        currentWishlist = currentWishlist.filter(event => event !== eventId);
      else {
        currentWishlist.push(eventId);
      }

      return { ...state, wishlist: currentWishlist };
    }

    case GET_USER_WISHLIST: {
      const userWishlist: string[] = action.wishlist;
      return { ...state, wishlist: userWishlist };
    }

    default:
      return state;
  }
};

export default events;
