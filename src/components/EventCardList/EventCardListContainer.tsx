import {connect} from 'react-redux';
import EventCardList from './EventCardList';
import { IHistoryEvent } from '../common/interfaces';
import { bulkAddEvent } from '../../actions/actions';

const mapStateToProps = (state: any = []) => ({
    events: state.events.data || null
});

const mapDispatchToProps = (dispatch: any) => ({
    onEventsPulled: (events:IHistoryEvent[]) => {
        dispatch(bulkAddEvent(events));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(EventCardList);