import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact>
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink to="/contacts" exact>
        Contacts
      </NavLink>
    )}
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navigation;
