import { IUserType, IHistoryEvent } from "../components/common/interfaces";

// ---  USERS  ---
//constants
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const CHANGE_LOGGED_USER = "CHANGE_LOGGED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

//action creators
export const addUser = (user:IUserType) => ({
    type: ADD_USER,
    user
});

export const removeUser = (userId: number) => ({
    type: REMOVE_USER,
    userId
});

export const updateUser = (user:IUserType) => ({
    type: UPDATE_USER,
    user
});

export const changeLoggedUser = (user:IUserType) => ({
    type: CHANGE_LOGGED_USER,
    user
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})

// ---  EVENTS  ---
//constants
export const ADD_EVENT = "ADD_EVENT";
export const BULK_ADD_EVENT = "BULK_ADD_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";


//action creators
export const addEvent = (event:IHistoryEvent) => ({
    type: ADD_EVENT,
    event
});

export const bulkAddEvent = (events:IHistoryEvent[]) => ({
    type: BULK_ADD_EVENT,
    events
});

export const removeEvent = (eventId: string) => ({
    type: REMOVE_EVENT,
    eventId
});

export const updateEvent = (event:IHistoryEvent) => ({
    type: UPDATE_EVENT,
    event
});

// --- WISHLIST ---
// constants

export const CHANGE_WISHLIST = "CHANGE_WISHLIST";
export const GET_USER_WISHLIST = "GET_USER_WISHLIST";


//action creators

export const changeWishlist = (eventId: string) => ({
    type: CHANGE_WISHLIST,
    eventId
});

export const getUserWishlist = (wishlist: string[]) => ({
    type: GET_USER_WISHLIST,
    wishlist
});