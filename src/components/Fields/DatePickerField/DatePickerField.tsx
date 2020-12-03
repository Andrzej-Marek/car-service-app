import React, { FC } from "react";
import { FieldWrapper } from "../styles";
import { useField } from "formik";
import { KeyboardDatePicker } from "@material-ui/pickers";

interface OwnProps {
  name: string;
  label: string;
  required?: boolean;
}

type Props = OwnProps;

const DatePickerField: FC<Props> = ({
  name,
  label,
  required = false,
  ...rest
}) => {
  const [field, { error, touched }, { setValue }] = useField(name);

  const handleDateChange = (date: Date | null) => {
    setValue(date);
  };

  const errorMessage = touched && error && error;
  return (
    <FieldWrapper>
      <KeyboardDatePicker
        disableToolbar
        format="dd/MM/yyyy"
        margin="normal"
        label={label}
        required={required}
        error={!!errorMessage}
        helperText={errorMessage}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        {...field}
        {...rest}
        onChange={handleDateChange}
      />
    </FieldWrapper>
  );
};

export default DatePickerField;
//
