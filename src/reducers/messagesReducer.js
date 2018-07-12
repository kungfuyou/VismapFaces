import C from '../actions/constants';

export default function messagesReducer (state=[], action) {
  switch(action.type) {
    case C.MESSAGE_ADD:
      console.log('message added', action.message);
      return [
        ...state,
        action.message
      ];

    case C.MESSAGE_CLEAR:
      console.log('clear message');

      return state.filter( (message, index) => {
        return index != action.messageKey
      });

      case C.MESSAGES_CLEAR:
        console.log('clear all messages');
        return [];

    default: return state;
  }
}
