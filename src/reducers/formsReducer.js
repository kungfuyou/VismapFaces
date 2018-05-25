import C from '../actions/constants';
import initialState from '../state/initialState';

const form = function(state={}, action) {
  switch(action.type) {
    case C.UPDATE_FORM_BUSY: {
      return (state.id !== action.form.id) ?
        state : {...state, busy : action.form.busy };
    }

    default: return state;
  }
};

const formsReducer = function(state=[], action) {
  switch (action.type) {
    case C.INITIAL_FORM_STATE: {
      const forms = Object.keys(action.fields).map((key) => {
        return {
          id: key,
          ajaxCallsInProgress: 0
        };
      });

      return forms;
    }

    case C.UPDATE_FORM_BUSY: {
      return state.map(
        c => {
          return form(c, action);
        }
      );
    }
    default: return state;
  }
};


export default formsReducer;
