import React from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import NavCategoryProvider from '@/context/navCategoryContext';
import store from '@/store';

import App from './App';
import { theme } from './utils/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

TimeAgo.addDefaultLocale(en);

ReactDOM.render(
  <Provider store={store}>
    <NavCategoryProvider>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <CssBaseline />
            <App />
          </React.StrictMode>
        </ThemeProvider>
      </HelmetProvider>
    </NavCategoryProvider>
  </Provider>,
  document.getElementById('root'),
);
