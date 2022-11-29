import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ label, name }) => {
  const { control } = useFormContext();
  // const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            label={label}
            {...field}
            required
            fullWidth
            value={field.value}
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
