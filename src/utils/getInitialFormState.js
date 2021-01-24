import {map} from "lodash";

const getInitialFormState = (defaultFormState , user, keys)=> {
  if (!user) return defaultFormState;
  let initialFormState = defaultFormState;
  map(keys, key => initialFormState[key].value = user[key]);
  return initialFormState;
};

export default getInitialFormState;
    