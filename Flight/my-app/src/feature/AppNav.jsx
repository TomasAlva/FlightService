import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';


export const AppNav = () => {
    return (
        <Nav>
            <NavSection>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/flights">Flights</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink to="/addflight" >Add Flight</NavLink>
                </NavItem>
               {/* <NavItem>
                    <NavLink to="/updateflight" >Update Flight</NavLink>
                </NavItem>*
                <NavItem>
                    <FloatRight>
                        <NavLink to="/deleteflight">Delete Flight</NavLink>
                    </FloatRight>
                </NavItem>*/}
            </NavSection>
        </Nav>
    )
}