import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import NavItems from './NavItems'
import NavItem from './NavItem/NavItem'

configure({adapter: new Adapter()})

describe('<NaviItems/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavItems/>);
    });

    it('should render two <NaviItems /> elements if not authenticated', () => {
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });

    it('should render three <NaviItems /> elements if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });

    it('should render logout element only if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.contains(<NavItem link="/logout">Logout</NavItem>)).toEqual(true)
    })
});

