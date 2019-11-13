import React from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

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
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  )
}

