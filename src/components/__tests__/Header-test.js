import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

test('Check <Header /> is getting rendered properly without errors!', () => {
    const component = renderer.create(
        <MuiThemeProvider>
            <Header welcome={"test"}/>
        </MuiThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
