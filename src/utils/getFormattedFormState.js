/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const getFormattedFormState = (keys, state) => {
  let result = {};
  keys.forEach((key) => (result[key] = state[key].value));
  return result;
};
export default getFormattedFormState;
