import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #90e0ef; /* Blue background for the nav */
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px; /* Space between nav items */
`;

export const NavItem = styled.li`
  padding: 10px 20px;
  background-color: #00b4d8; /* Slightly darker blue for items */
  color: white;
  border-radius: 20px; /* Rounded pill shape */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077b6; /* Even darker blue on hover */
  }
`;
