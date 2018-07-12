import C from './constants';

export const addMessage = ({messageType, messageContent}) => {
  return {
    type: C.MESSAGE_ADD,
    message: {
      type: messageType,
      content: messageContent
    }
  };
};

export const clearMessage = (messageKey) => {
  return {
    type: C.MESSAGE_CLEAR,
    messageKey: messageKey
  };
};

export const clearMessages = () => {
  return {
    type: C.MESSAGES_CLEAR
  };
};
