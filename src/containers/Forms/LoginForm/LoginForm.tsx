import { FormLink, PrimaryButton, TextField } from "@/components";
import { CustomForm } from "@/containers";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const LoginForm: FC<Props> = () => {
  const { t } = useTranslation("fields");
  return (
    <CustomForm
      initialValues={{
        identifier: "",
        password: "",
      }}
      onSubmit={(values) => console.log("values", values)}
    >
      {({}) => (
        <FormWrapper>
          <TextField
            name="identifier"
            label={t("email.label")}
            space={{ bottom: 20 }}
          />
          <TextField
            name="password"
            label={t("password.label")}
            space={{ bottom: 20 }}
          />
          <PrimaryButton type="submit">Zaloguj się</PrimaryButton>

          <FormLink>Nie masz konta? Załóż konto!</FormLink>
          <FormLink>Nie pamiętam hasła</FormLink>
        </FormWrapper>
      )}
    </CustomForm>
  );
};

const FormWrapper = styled.div`
  padding: 10px 20px;
`;

export default LoginForm;
