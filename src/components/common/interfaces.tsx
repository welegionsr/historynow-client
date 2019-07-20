export interface IHistoryEvent {
    eventTitle: string;
    eventDesc?: string;
    id: number;
    typeOfEvent: number;
    country?: string;
    city?: string;
    eraId?: number;
    eventDate: string;
    price: number;
    eventImageUrl?: string;
}

export interface IUserType {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    id: number;
}