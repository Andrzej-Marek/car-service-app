import React, { FC } from "react";
import { FieldWrapper } from "../styles";
import {
  TextField as TextFieldMaterial,
  TextFieldProps,
} from "@material-ui/core";
import { useField } from "formik";

interface OwnProps {
  name: string;
  label: string;
  space?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  required?: boolean;
}

type Props = OwnProps & TextFieldProps;

const TextField: FC<Props> = ({
  name,
  label,
  required = false,
  space,
  ...rest
}) => {
  const [field, { error, touched }] = useField(name);

  const onBlurHandler = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    field.onBlur(event);

    if (rest.onBlur) {
      rest.onBlur(event);
    }
  };

  const errorMessage = touched && error && error;
  return (
    <FieldWrapper space={space}>
      <TextFieldMaterial
        variant="outlined"
        fullWidth
        label={label}
        required={required}
        error={!!errorMessage}
        helperText={errorMessage}
        {...rest}
        {...field}
        value={field.value === null ? "" : field.value}
        onBlur={onBlurHandler}
      />
    </FieldWrapper>
  );
};

export default TextField;
