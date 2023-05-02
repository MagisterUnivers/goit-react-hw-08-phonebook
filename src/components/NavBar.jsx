import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from 'redux/selectors';
import styled from 'styled-components';

export const NavBar = () => {
  const navMap = [
    { path: '/', title: 'Register' },
    { path: '/login', title: 'Login' },
    { path: '/contacts', title: 'Contacts' },
  ];

  const { name } = useSelector(selectUser);

  return (
    <SideBar>
      {navMap.map(({ path, title }) => (
        <NavItem key={path} to={path}>
          {title}
        </NavItem>
      ))}
      <UserStatus>
        <h1>
          Welcome{' '}
          {name ? <Username>{name}</Username> : <Username>Guest</Username>}
        </h1>
        <LogoutButton>Log Out</LogoutButton>
      </UserStatus>
    </SideBar>
  );
};
const SideBar = styled.nav`
  background-color: rgb(213, 237, 253);
  min-height: 100vh;
  border-right: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 40px 20px;
  position: fixed;
  top: 0;
  width: 15%;
  left: 0;
`;
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    background-color: blue;
    color: white;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: blue;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: darkblue;
  }
`;

const UserStatus = styled.div`
  position: absolute;
  bottom: 10%;
  text-align: inherit;
`;

const Username = styled.span`
  font-weight: bold;
  color: tomato;
`;
