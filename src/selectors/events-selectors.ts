import { IEventStore } from "../components/common/interfaces";

export const getEventsState = (store: IEventStore) => store;

export const getAllEvents = (store: IEventStore) => store.allEvents;

export const getWishlistEvents = (store: IEventStore) => store.wishlist;

export const getEventById = (store: IEventStore, eventId: string) => {
  const events = getAllEvents(store);
  console.log(events);

  if (events) {
    console.log(`example of _id: ${events[0]._id}`);
    const result = events.find(event => event._id === eventId);
    console.log(`result of getEventById (for id: ${eventId}):`);
    console.log(result);
    return result;
  }

  return null;
};

export const findWishlistEventById = (store: IEventStore, eventId: string) => {
  const wishlistEvents = getWishlistEvents(store);

  if (wishlistEvents) {
    return wishlistEvents.some(event => event === eventId);
  }

  return false;
};
