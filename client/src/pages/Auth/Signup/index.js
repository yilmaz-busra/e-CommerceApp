import React from "react";
import { useFormik } from "formik";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
  Alert,
} from "@chakra-ui/react";
import validationSchema from "./validations";
import { fetchRegister } from "../../../api";
import { Await } from "react-router-dom";
import { useAuth } from "../../../contextts/AuthContext";

function Signup() {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      try {
        // kayıt işlemi için formdan gelen verileri veritabanına gönderiyoruz.
        const registerResponse = await fetchRegister({
          email: values.email,
          password: values.password,
        });
        // authContext içerisinde yazılmış olan login fonksiyonu ile beraber veritabanına gönderilen verilerle login işlemini gerçekleştiriyoruz
        login(registerResponse);
        console.log(registerResponse);
      } catch (e) {
        bag.setErrors({ general: e.response.data.message }); // hata mesajını alıyoruz
      }
    },
    validationSchema: validationSchema,
  });
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sing Up</Heading>
          </Box>
          <Box my={5}>
            {formik.errors.general && (
              <Alert status="error">{formik.errors.general}</Alert>
            )}
          </Box>
          <Box my={5} textAlign="center">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  id="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  // email ile alakalı bir sorun varsa goster
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  // password ile alakalı bir sorun varsa goster
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password Confirm</FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  id="passwordConfirm"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.passwordConfirm}
                  // passwordConfirm ile alakalı bir sorun varsa goster
                  isInvalid={
                    formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm
                  }
                />
              </FormControl>
              <Button mt={5} type="submit">
                Signup
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signup;
