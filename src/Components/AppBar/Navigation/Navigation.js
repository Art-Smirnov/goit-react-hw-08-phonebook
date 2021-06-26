import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact>
      Главная
    </NavLink>

    <NavLink to="/contacts" exact>
      Заметки
    </NavLink>
  </nav>
);

export default Navigation;
