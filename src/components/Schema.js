import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("You should enter your name")
    .min(2, "Enter at least 2 characters"),
  lastName: yup
    .string()
    .required("You should enter your lastName")
    .min(2, "Enter at least 2 characters"),
  email: yup
    .string()
    .email("format of email is incorrect")
    .required("You should enter your email"),
  query: yup.boolean().nullable(),
  message: yup
    .string()
    .required("You should enter your message")
    .min(10, "Enter at least 10 characters"),
  consent: yup.boolean().oneOf([true], "You should accept the conditions"),
});
