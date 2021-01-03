import React, { FC } from "react";
import { FieldWrapper } from "../styles";
import { useField } from "formik";
import { TimeService } from "@/shared/services";
import { TextField } from "@material-ui/core";
import { get } from "lodash";

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
  const [field, { error, touched }, { setValue }] = useField<Date | string>(
    name
  );

  const handleDateChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const dateValue = get(event, "target.value");
    if (!dateValue) {
      return;
    }

    const isoDate = TimeService.toIsoDate(event.target.value);
    setValue(isoDate);
  };

  const errorMessage = touched && error && error;

  return (
    <FieldWrapper>
      <TextField
        variant="outlined"
        fullWidth
        required={required}
        label={label}
        error={!!errorMessage}
        helperText={errorMessage}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        {...rest}
        {...field}
        value={TimeService.toDatePickerFormat(field.value)}
        onChange={handleDateChange}
      />
    </FieldWrapper>
  );
};

export default DatePickerField;
//
