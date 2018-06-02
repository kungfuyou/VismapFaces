import C from './constants';
import fetch from 'cross-fetch';
import {ajaxCallBegin, ajaxCallError, ajaxCallSuccess} from './ajaxStatusActions';
import {initialFormsState} from './formsActions';

/* getFildsKey and getFieldsValues return formatting to return to state from components */
const getFieldsKey = (fields) => {
  const key = Object.keys(fields);
  return key[0];
};

const getFieldsValues = (fields) => {
  console.log(fields);
  const values = Object.values(fields).map(function(curr){
    return Object.entries(curr).map(function(curr){
      return curr[1];
    });
  });

  return values[0];
};

/* Thunks and Actions */
export function loadFields() {
  return (dispatch) => {
    dispatch(ajaxCallBegin());
    return fetch('http://localhost:3002/fields')
    .then((response) => {
        return response.json();
      })
    .then((fields) => {
        dispatch(initialFormsState(fields));
        return dispatch(loadFieldsSuccess(fields));
      })
    .then(() => {
      dispatch(ajaxCallSuccess());
    })
    .catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function loadFieldsSuccess(fields) {
  return {
    type: C.LOAD_FIELDS_SUCCESS,
    fields
  };
}

export function saveFields(fieldObject) {
  const formKey = getFieldsKey(fieldObject);
  const formValues = getFieldsValues(fieldObject);
  const fields = {[formKey] : formValues};

  return (dispatch) => {
    return fetch('http://localhost:3002/fields' , {
      method: 'PUT',
      body: JSON.stringify(fields),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      return response.json();
    })
    .then(res => {
      dispatch(saveFieldsSuccess(fields));
    })
    .catch(error => {
      console.log('Error', error);
    });
  };
}

export function saveFieldsSuccess(fields) {
  return {
    type: C.SAVE_FIELDS_SUCCESS,
    fields
  };
}
