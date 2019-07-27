export interface IHistoryEvent {
    title: string;
    description?: string;
    _id: string;
    typeOfEvent: number;
    country?: string;
    city?: string;
    eraName: string;
    dateInTime: string;
    date: Date;
    price: number;
    imageUrl?: string;
}

export interface IUserType {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    _id: string;
}

export interface IEventStore {
    allEvents: IHistoryEvent[];
    wishlistEvents: IHistoryEvent[];
}

export interface IUserStore {
    allUsers: IUserType[];
    currentUser?: IUserType;
}

export interface IStore {
    events: IEventStore;
    users: IUserStore;
}
