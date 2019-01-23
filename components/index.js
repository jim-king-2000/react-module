import GlobalNavigation from '@atlaskit/global-navigation';
import { MdDirectionsBus } from "react-icons/md";
import { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';
import Router from 'next/router';

const LoginDropdown = () => (
  <DropdownItemGroup>
    <DropdownItem href='/login'>
      Login
    </DropdownItem>
  </DropdownItemGroup>
);

const LogoutDropdown = () => (
  <DropdownItemGroup>
    <DropdownItem href='/logout'>
      Logout
    </DropdownItem>
  </DropdownItemGroup>
);

function onProductClick() {
  Router.push('/');
}

export default ({ isAuthenticated }) => (
  <GlobalNavigation
    productIcon={MdDirectionsBus}
    productHref='/'
  />
);