import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
    color: black;
    transition: color 0.1s;

    &:hover{
        color: #860386;
    }
`;