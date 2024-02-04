import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  pass: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
});
