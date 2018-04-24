import C from '../actions/constants';
import initialState from '../state/initialState';

const graphReducer = function(state=initialState.graph, action) {
  switch (action.type) {
    case C.EDIT_GRAPH : {
      return {
        background: action.background,
        title: action.title,
        xLabel: action.xLabel,
        yLabel: action.yLabel
      };
    }

    default:
      return state;
  }
};

export default graphReducer;
