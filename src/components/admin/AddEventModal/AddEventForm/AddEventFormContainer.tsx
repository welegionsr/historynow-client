import { AddEventForm } from "./AddEventForm";
import { connect } from "react-redux";
import { addEvent } from "../../../../actions/actions";
import { IHistoryEvent } from "../../../common/interfaces";

const mapDispatchToProps = (dispatch: any) => ({
  onEventCreated: (newEvent: IHistoryEvent) => {
    dispatch(addEvent(newEvent));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddEventForm);
