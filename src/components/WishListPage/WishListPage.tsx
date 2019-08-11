import React from "react";
import "./WishListPage.css";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { IStore, IHistoryEvent } from "../common/interfaces";
import { getWishlistEventsObjects } from "../../selectors/events-selectors";
import EventCardContainer from "../EventCard/EventCardContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

interface IWishListPageProps {
  wishlist: IHistoryEvent[];
}

class WishListPage extends React.Component<IWishListPageProps> {
  render() {
    return (
      <Container className="wishlist-page">
        <Row>
          {this.props.wishlist.map((event, index) => {
            return (
              <>
                {index % 3 === 0 ? <div className="w-100" /> : null}
                <Col
                  sm={12}
                  md={4}
                  lg={4}
                  key={"col-" + index}
                  className="card-row"
                >
                  <EventCardContainer
                    event={event}
                    key={"card-" + index}
                    inWishlist={true}
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: IStore, ownProps: any) => ({
  ...ownProps,
  wishlist: getWishlistEventsObjects(state.events)
});

export default connect(mapStateToProps)(WishListPage);
