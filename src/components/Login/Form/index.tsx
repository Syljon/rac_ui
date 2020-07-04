import { Formik, Form, FieldAttributes, useField } from "formik";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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

const FormField: React.FC<FieldAttributes<{}> & { label: string }> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      label={label}
      variant="outlined"
      margin="normal"
      fullWidth
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export function FormikForm() {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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
          <FormField label="Email address*" name="email" autoFocus />
          <FormField label="Password*" name="password" type="password" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
}
