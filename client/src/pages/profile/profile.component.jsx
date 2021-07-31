import React from "react";
import "./profile.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const ProfilePage = ({ currentUser }) => (
  <div className="profile">
    {currentUser ? (
      <h1>This is a profile page {currentUser.displayName}</h1>
    ) : (
      <h1>User DOES NOT exists</h1>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(ProfilePage);
