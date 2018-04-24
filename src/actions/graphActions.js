import C from './constants';

export function editGraph(background, title, xLabel, yLabel) {
  return {
    type: C.EDIT_GRAPH,
    background: background,
    title: title,
    xLabel: xLabel,
    yLabel: yLabel
  };
}
