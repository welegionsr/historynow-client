import { IStore } from "../components/common/interfaces";

export const getEventsState = (store: IStore) => store.events;

export const getAllEvents = (store: IStore) => store.events.allEvents;

export const getWishlistEvents = (store: IStore) => store.events.wishlistEvents;

export const getEventById = (store: IStore, eventId: string) => {
  const events = getAllEvents(store);

  if (events) {
    return events.find(event => event._id === eventId);
  }

  return null;
};

export const getWishlistEventById = (store: IStore, eventId: string) => {
  const wishlistEvents = getWishlistEvents(store);

  if (wishlistEvents) {
    return wishlistEvents.some(event => event._id === eventId);
  }

  return false;
};
