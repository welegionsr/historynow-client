import {connect} from 'react-redux';
import {EventCard, IEventCardProps} from './EventCard';
import { changeWishlist } from '../../actions/actions';
import { IStore } from '../common/interfaces';
import { findWishlistEventById } from '../../selectors/events-selectors';

const mapStateToProps = (state: IStore, ownProps: IEventCardProps) => ({
    ...ownProps,
    user: state.users.currentUser ? state.users.currentUser : null,
    inWishlist: findWishlistEventById(state.events, ownProps.event._id)
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
  