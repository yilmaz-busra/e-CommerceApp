import { string, object } from "yup";

const validationSchema = object({
  email: string().email().required(),
  password: string().required(),
  passwordConfirm: string().required(),
});

export default validationSchema;
