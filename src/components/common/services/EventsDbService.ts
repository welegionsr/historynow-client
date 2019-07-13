export class EventsDbService {
    private EVENTS_API_URL = 'localhost:5000/events';

    async getAllEvents() {
        const data = null;

        fetch(this.EVENTS_API_URL).then((res) => res.json()).then

    }
}