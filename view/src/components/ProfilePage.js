import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { isEmptyObject } from '../utils/emptyObject';

const ProfilePage = ({ user }) => {
  if (user === null) return <div>Something has gone terribly wrong</div>;
  else if (isEmptyObject(user)) {
    return <Redirect to="/login" />;
  }
  return (<p>
    ID: {user.id}<br />
    Username: {user.username}<br />
    Name: {user.displayName}<br />
    {user.emails &&
      <div>
        Email: {user.emails[0].value}
      </div>}
    <a href="/auth/logout">Log out </a>
  </p>);
};

// class ProfilePage extends React.Component {
//   renderContent() {
//     const { user } = this.props;
//     if (user === null) return <div>Something has gone terribly wrong</div>;
//     else if (isEmptyObject(user)) {
//       return <Redirect to="/login" />;
//     }
//     return (<p>
//       ID: {user.id}<br />
//       Username: {user.username}<br />
//       Name: {user.displayName}<br />
//       {user.emails &&
//         <div>
//           Email: {user.emails[0].value}
//         </div>}
//       <a href="/auth/logout">Log out </a>
//     </p>);
//   }
//
//   render() {
//     return (
//       <div>
//         {this.renderContent()}
//       </div>
//     );
//   }
// }

ProfilePage.propTypes = {
  /* eslint-disable */
  user: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    user: state,
  };
}

export default connect(mapStateToProps)(ProfilePage);
