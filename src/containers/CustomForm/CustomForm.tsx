import React from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";

interface OwnProps<T> {
  initialValues: T;
  onSubmit: (values: T, formHelpers: FormikHelpers<T>) => void;
  children: (formProps: FormikProps<T>) => JSX.Element;
}

type Props<T> = OwnProps<T>;

const CustomForm = <T,>({ initialValues, children, onSubmit }: Props<T>) => {
  return (
    <Formik<T> initialValues={initialValues} onSubmit={onSubmit}>
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>{children(formProps)}</form>
      )}
    </Formik>
  );
};

export default CustomForm;
