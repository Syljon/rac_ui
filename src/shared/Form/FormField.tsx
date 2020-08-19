import { FieldAttributes, useField } from "formik";
import TextField from "@material-ui/core/TextField";
import React from "react";

export const FormField: React.FC<FieldAttributes<{}> & { label: string }> = ({
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
      type={props.type}
      helperText={errorText}
      error={!!errorText}
    />
  );
};
