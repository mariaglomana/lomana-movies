const getFormattedFormState = (type, state)=> {
  let result= {};
  Object.keys(state).forEach((key)=> result[key]= state[key].value);
  return result;
};
export default getFormattedFormState;

// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

// type Result = {
//     [key: keyof State]: string
//   }
  

// const getFormattedState = (type: FormType, state: State) : Omit<User, "id"> | Omit<User, "id"| "first_name"| "last_name"> => {
//     let result: Result= {};
//     Object.keys(state).forEach((key)=> result[key]= state[key].value);
//     return result;
//   };
  
  