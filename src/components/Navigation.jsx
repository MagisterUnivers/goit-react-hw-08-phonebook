import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/register">Регистрация</NavLink>
      </li>
      <li>
        <NavLink to="/login">Вход</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Контакты</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
