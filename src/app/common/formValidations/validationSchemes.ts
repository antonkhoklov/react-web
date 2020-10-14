import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short! - should be 6 chars minimum.")
    .matches(/[A-Z]/, "Password must contain 1 uppercase letter.")
    .matches(/[a-z]/, "Password must contain 1 lowercase letter.")
    .matches(/[0-9]/, "Password must contain a number.")
    .matches(/[^a-zA-Z0-9]/, "Password must contain non alphanumeric.")
    .required("Required"),
  // passwordConfirmation: Yup.string().oneOf(
  //   [Yup.ref("password"), undefined],
  //   "Passwords must match"
  // ),
});

const signUpSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("Required")
    .min(3, "Too Short! - should be 3 chars minimum."),
  lastname: Yup.string()
    .required("Required")
    .min(3, "Too Short! - should be 3 chars minimum."),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short! - should be 6 chars minimum.")
    .matches(/[A-Z]/, "Password must contain 1 uppercase letter.")
    .matches(/[a-z]/, "Password must contain 1 lowercase letter.")
    .matches(/[0-9]/, "Password must contain a number.")
    .matches(/[^a-zA-Z0-9]/, "Password must contain non alphanumeric.")
    .required("Required"),
  // passwordConfirmation: Yup.string().oneOf(
  //   [Yup.ref("password"), undefined],
  //   "Passwords must match"
  // ),
});


export { signInSchema, signUpSchema };
