import React from 'react';
import ReactDOM from 'react-dom';
import Home from './sections/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const wrapped = (
      <MuiThemeProvider>
          <Home welcome={'REACT CMS'}/>
      </MuiThemeProvider>
)

ReactDOM.render(
    wrapped, document.getElementById('root') );
