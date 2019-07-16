import {connect} from 'react-redux';
import Content from './Content';

const mapStateToProps = (state) => ({
    isLoggedIn: state.users.currentUser ? true : false
});


export default connect(mapStateToProps)(Content);