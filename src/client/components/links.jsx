import { NavLink } from "react-router-dom";

export const NavButton = ({ to, destination }) => {
  return (
    <NavLink
      to={to}
      style={{
        color: "red"
      }}
    >
      {destination}
    </NavLink>
  );
};
