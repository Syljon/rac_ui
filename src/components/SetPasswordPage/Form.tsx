import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { FormField } from "../shared/Form/FormField";
import FormButton from "../shared/Form/FormButton";

const validationSchema = yup.object({
  password: yup.string().required("password is a required field"),
  password2: yup
    .string()
    .required("repeat password is a required field")
    .test(
      "password-match",
      "password and repeated password don't match",
      function (value) {
        const { password } = this.parent;
        return password === value;
      }
    ),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
}));

export default function SetPasswordForm() {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ password: "", password2: "" }}
      validateOnChange={true}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 4000);
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormField label="Password*" name="password" type="password" />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Repeat password*"
                name="password2"
                type="password"
              />
            </Grid>
          </Grid>

          <FormButton loading={isSubmitting}>Sign up</FormButton>
        </Form>
      )}
    </Formik>
  );
}
