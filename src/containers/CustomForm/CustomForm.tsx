import React from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { Yup } from "@/shared/utils";

interface OwnProps<T> {
  initialValues: T;
  onSubmit: (values: T, formHelpers: FormikHelpers<T>) => void;
  children: (formProps: FormikProps<T>) => JSX.Element;
  validationSchema?: Yup.ObjectSchema<Yup.Shape<object | undefined, T>, object>;
}

type Props<T> = OwnProps<T>;

const CustomForm = <T,>({
  initialValues,
  validationSchema,
  children,
  onSubmit,
}: Props<T>) => {
  return (
    <Formik<T>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>{children(formProps)}</form>
      )}
    </Formik>
  );
};

export default CustomForm;
