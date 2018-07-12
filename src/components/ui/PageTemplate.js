import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';
import LoadingOverlay from './LoadingOverlay';
import Messages from '../messages/MessagesContainer';

const PageTemplate = ({children, loading, loggedIn=false}) => {
  return (
    <div className="page">
      <MainMenu loggedIn={loggedIn}/>
      <Messages />
      {loading ?
        <LoadingOverlay loading={loading} />
        :
        children}
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.array,
  loading: PropTypes.bool,
  loggedIn: PropTypes.bool
};

export default PageTemplate;
