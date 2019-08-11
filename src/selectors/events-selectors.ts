import { IEventStore, IHistoryEvent } from "../components/common/interfaces";

export const getEventsState = (store: IEventStore) => store;

export const getAllEvents = (store: IEventStore) => store.allEvents;

export const getWishlistEvents = (store: IEventStore) => store.wishlist;

export const getEventById = (store: IEventStore, eventId: string) => {
  const events = getAllEvents(store);

  if (events) {
    const result = events.find(event => event._id === eventId);
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

export const getWishlistEventsObjects = (store: IEventStore) => {
  const wishlistEventsIds = getWishlistEvents(store);
  const allEvents = getAllEvents(store);
  let wishListObjects: IHistoryEvent[] = [];

  if (wishlistEventsIds) {
    wishlistEventsIds.forEach((eventId, index) => {
      let event = allEvents.find(event => event._id === eventId);
      if (event) wishListObjects.push(event);
    });
    return wishListObjects;
  }

  return false;
};
