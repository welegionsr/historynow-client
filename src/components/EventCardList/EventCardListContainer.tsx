import {connect} from 'react-redux';
import EventCardList from './EventCardList';
import { IHistoryEvent, IStore } from '../common/interfaces';
import { bulkAddEvent } from '../../actions/actions';


const mapStateToProps = (state: IStore) => ({
    allEvents: state.events.allEvents || null,
    wishlistEvents: state.events.wishlist || null
});

const mapDispatchToProps = (dispatch: any) => ({
    onEventsPulled: (events:IHistoryEvent[]) => {
        dispatch(bulkAddEvent(events));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(EventCardList);