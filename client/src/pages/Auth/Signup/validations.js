import { string, object, ref } from "yup";

const validationSchema = object({
  email: string().email().required(),
  password: string().min(8, "parolanız en az 8 karakter olmalı").required(),
  passwordConfirm: string()
    .required()
    .oneOf([ref("password")], "Şifre Uyuşmuyor"),
});

// import * as yup from "yup";

// const validationSchema = yup.object().shape({
//   email: yup.string().email("Geçerli bir mail girin").required("zorunlu alan"),
//   password: yup.string().min(8, "parolanız en az 8 karakter olmalı").required(),
//   passwordConfirm: yup
//     .string()
//     .oneOf([yup.ref("password")], "Parolalar uyuşmuyor"),
// });

export default validationSchema;
