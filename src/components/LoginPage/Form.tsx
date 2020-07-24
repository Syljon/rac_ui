import { Formik, Form } from "formik";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";
import FormButton from "../shared/Form/FormButton";
import { FormField } from "../shared/Form/FormField";
import { login } from "../../api/auth";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default function LoginForm() {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnChange={true}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        login({
          email: values.email,
          password: values.password,
          cb: setSubmitting,
        });
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form className={classes.form} noValidate>
          <FormField label="Email address*" name="email" autoFocus />
          <FormField label="Password*" name="password" type="password" />
          <FormButton loading={isSubmitting}>Sign up</FormButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
