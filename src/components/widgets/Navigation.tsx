import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap';

interface NavigationProps {
  navItems: Array<Object>
}

export const Navigation: React.FC<NavigationProps> = props => {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const navItems = props.navItems.map((item: any, index: number) => (
      <LinkContainer to={item.link} key={index}>
        <NavItem>
          <NavLink>
            {item.name}
          </NavLink>
        </NavItem>
      </LinkContainer>
    )
  )

  return (
    <div className={'Navigation ' + (collapsed ? 'collapsed' : 'open')}>
      <Navbar>
        <NavbarToggler onClick={toggleNavbar}
                       className={collapsed ? 'collapsed' : 'open'}>
          <span className='navbar-toggler-bar top'/>
          <span className='navbar-toggler-bar center'/>
          <span className='navbar-toggler-bar bottom'/>
        </NavbarToggler>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>{navItems}</Nav>
        </Collapse>
      </Navbar>

    </div>
  )
}

