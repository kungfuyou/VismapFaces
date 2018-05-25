import C from './constants';

/* Create Forms State based on fields returned from API */
export function initialFormsState(fields) {
  return {
    type: C.INITIAL_FORM_STATE,
    fields
  };
}

export function updateFormBusy(form) {
  return {
    type: C.UPDATE_FORM_BUSY,
    form
  };
}
