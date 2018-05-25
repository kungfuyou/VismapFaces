import C from '../actions/constants';
import initialState from '../state/initialState';

export default function fieldsReducer (state={}, action) {
  switch(action.type) {
    case C.LOAD_FIELDS_SUCCESS:
      return action.fields;

    case C.SAVE_FIELDS_SUCCESS: {
      return action.fields;
    }

    default: return state;
  }
}
