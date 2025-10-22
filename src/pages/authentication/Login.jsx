import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { loginActionUser } from "../../Redux/Auth/auth.actions.js";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Login = () => {

  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("Form values:", values);
    dispatch(loginActionUser({data:values}));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </div>

          <div>
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-amber-950 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
