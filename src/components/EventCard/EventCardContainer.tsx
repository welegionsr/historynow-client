import {connect} from 'react-redux';
import {EventCard, IEventCardProps} from './EventCard';
import { changeWishlist } from '../../actions/actions';
import { IStore } from '../common/interfaces';
import { getWishlistEventById } from '../../selectors/events-selectors';

const mapStateToProps = (state: IStore, ownProps: IEventCardProps) => ({
    ...ownProps,
    userId: state.users.currentUser ? state.users.currentUser._id : null,
    inWishlist: getWishlistEventById(state, ownProps.event._id)
  });
  
  const mapDispatchToProps = (dispatch: any) => ({
    onWishlistChange: (eventId: string) => {
      dispatch(changeWishlist(eventId));
    }
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EventCard);
  