const validationFormSchema = {
  first_name: {
    required: true,
    validator: {
      regEx: /^[A-Za-z ]+$/,
      error: "Invalid first name format.",
    },
  },
  last_name: {
    required: true,
    validator: {
      regEx: /^[a-zA-Z ]+$/,
      error: "Invalid last name format.",
    },
  },
  email: {
    required: true,
    validator: {
      regEx: /^\S+@\S+$/,
      error: "Invalid email format.",
    },
  },
  password: {
    required: true,
    validator: {
      regEx: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      error:
        "Your password must contain at least six characters, including one letter, one number and no spaces.",
    },
  },
};

export default validationFormSchema;
