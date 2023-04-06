import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import ModalContainer from '@/components/Modal/modalContainer';
import ToastManager from '@/features/ToastManager/ToastManager.lazy';
import Layout from '@/layouts';
import { history } from '@/store';

// multi language
import '@/locales/i18n';

// load app SCSS styles
import '@/styles/App.scss';

// load Toast styles
import 'react-toastify/dist/ReactToastify.css';

const ReactApp: React.FC = () => {
  return (
    <Router>
      <Helmet titleTemplate="%s - Roima Office" defaultTitle="Roima Office">
        <meta name="description" content="Roima to the moon!!!" />
      </Helmet>

      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
      <ModalContainer />
      <ToastManager />
    </Router>
  );
};

export default ReactApp;
