import { connect } from "react-redux";
import Home from "./home";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id
});

const mapDispatchToProps = dispatch => ({    
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
