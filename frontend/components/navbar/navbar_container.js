import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Navbar from "./navbar";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "Log out",
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
