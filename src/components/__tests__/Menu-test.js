import React from 'react';
import {shallow} from 'enzyme';
import Menu,{MenuItem} from '../Menu';

describe('<Menu /> ', () => {
    it('should properly set the header according to props', () => {
        const menu = shallow(<Menu heading="Hello" menuItems={[]}/>);
        expect(menu.find('.pure-menu-heading').text()).toEqual('Hello');
    });

    it('should render the list items properly',() => {
        const items = [{link:'varen',linkText:'hello'},{link:'varen',linkText:'hello'}];
        const menu = shallow(<Menu heading="Testing" menuItems={items} />);
        expect(menu.find(MenuItem).length).toEqual(2);
    });

    it('should not render any <MenuItem /> when no list is passed', ()=>{
        const menu = shallow(<Menu heading="Testing" menuItems={[]} />);
        expect(menu.find(MenuItem).length).toEqual(0);
    });
    it('should throw error when no header or menuItems are passed',() =>{
        expect( shallow(<Menu heading="hello"/>) ).toThrowError();
        expect( shallow(<Menu menuItems={[]}/>) ).toThrowError();
    });


});

describe('<MenuItem />',() =>{

    it('should render according to the props passed',() =>{
      const menuItem = shallow( <MenuItem link="test" linkText="Test" />);
      expect(menuItem.find('.pure-menu-link').text()).toEqual('Test');
      expect(menuItem.find('.pure-menu-link').props().href).toEqual('test');
    });

    it('should throw error without the required props i.e. link and linkText',() => {
      const menuItem = shallow( <MenuItem link="test" />);
      expect(menuItem).toThrowError();
      expect(shallow(<MenuItem linkText="hello" />)).toThrowError();

    })
});
