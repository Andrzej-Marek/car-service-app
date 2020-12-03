import { SelectOption } from "@/shared/types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { useField } from "formik";
import React, { FC, useMemo } from "react";
import { FieldWrapper } from "../styles";

interface OwnProps {
  name: string;
  label: string;
  required?: boolean;
  options: SelectOption[];
  afterSelect?: (selectedValue: any) => void;
}

type Props = OwnProps;

const SelectField: FC<Props> = ({
  name,
  label,
  options,
  afterSelect,
  required = false,
}) => {
  const [field, { error, touched }] = useField(name);

  const errorMessage = touched && error && error;

  const selectOptions = useMemo(
    () =>
      options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )),
    []
  );

  const onChangeHandler = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    field.onChange(event);
    if (afterSelect) {
      afterSelect(event.target.value);
    }
  };
  return (
    <FieldWrapper>
      <FormControl variant="outlined" fullWidth error={!!errorMessage}>
        <InputLabel id="select-outlined-label">{label}</InputLabel>
        <Select
          labelId="select-outlined-label"
          label={label}
          required={required}
          {...field}
          onChange={onChangeHandler}
        >
          {selectOptions}
        </Select>
        {!!errorMessage && (
          <FormHelperText>{errorMessage.toString()}</FormHelperText>
        )}
      </FormControl>
    </FieldWrapper>
  );
};

export default SelectField;
