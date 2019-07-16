import {connect} from 'react-redux';
import HeaderNav from './HeaderNav';
import { logoutUser } from '../../actions/actions';

const mapStateToProps = (state) => ({
    user: state.users.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);