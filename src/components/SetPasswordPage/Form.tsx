import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { FormField } from "../../shared/Form/FormField";
import FormButton from "../../shared/Form/FormButton";
import { useHistory } from "react-router-dom";
import useQuery from "../../shared/helpers/useQuery";
import { Routes } from "../../App";
import AuthService from "../../shared/services/auth.service";

const validationSchema = yup.object({
  password: yup.string().min(6).required("password is a required field"),
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
  const query = useQuery();
  const history = useHistory();
  let token: string;
  useEffect(() => {
    token = query.get("token") as string;
    if (!token) {
      history.push(Routes.Login);
      return;
    }
  }, [history, query]);

  return (
    <Formik
      initialValues={{ password: "", password2: "" }}
      validateOnChange={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await AuthService.SubmitSetPassword({
          token: token,
          password: values.password,
          password2: values.password2,
        });
        setSubmitting(false);
        if (response) {
          history.push("dashboard");
        }
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
