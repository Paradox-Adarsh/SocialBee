import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Name Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  gender: Yup.string().required("Select a gender"),
});

const Register = () => {
  const handleSubmit = (values) => {
    console.log("Form values:", values);
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
              name="firstName"
              label="First Name"
              type="text"
              variant="outlined"
              fullWidth
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
          </div>

          <div>
            <Field
              as={TextField}
              name="lastName"
              label="Last Name"
              type="text"
              variant="outlined"
              fullWidth
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </div>

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

          <div>
         
            <Field name="gender">
              {({ field }) => (
                <RadioGroup
                  row
                  {...field}
                  onChange={(event) => field.onChange(event)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              )}
            </Field>
            {touched.gender && errors.gender && (
              <div style={{ color: "red", fontSize: "0.875rem" }}>
                {errors.gender}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-red-500 w-full hover:bg-amber-950 text-white px-4 py-2 rounded"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
