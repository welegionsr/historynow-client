import { connect } from "react-redux";
import { IHistoryEvent, IStore } from "../../common/interfaces";
import { updateEvent } from "../../../actions/actions";
import { UpdateEventForm } from "./UpdateEventForm";

const mapStateToProps = (state: IStore, ownProps: any) => ({
    ...ownProps
  });

const mapDispatchToProps = (dispatch: any) => ({
  onEventUpdated: (event: IHistoryEvent) => {
    dispatch(updateEvent(event));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateEventForm);
