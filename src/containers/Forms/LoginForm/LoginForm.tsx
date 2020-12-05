import { FormLink, PrimaryButton, TextField } from "@/components";
import { CustomForm } from "@/containers";
import { login } from "@/shared/actions";
import { LoginDto } from "@/shared/dtos";
import { RouteUrl } from "@/shared/enums";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { loginFormInitialValues } from "./loginForm.initialValues";
import { loginFormSchema } from "./loginForm.schema";

interface OwnProps {}

type Props = OwnProps;

const LoginForm: FC<Props> = () => {
  const { t } = useTranslation(["fields", "auth"]);
  const history = useHistory();
  const [loginAction, { isLoading }] = useMutation(login);

  const onSubmitHandler = async (values: LoginDto) => {
    const userData = await loginAction(values);

    if (userData) {
      history.push(RouteUrl.NewService);
    }
  };

  return (
    <CustomForm<LoginDto>
      initialValues={loginFormInitialValues}
      onSubmit={onSubmitHandler}
      validationSchema={loginFormSchema}
    >
      {() => (
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
            type="password"
          />
          <PrimaryButton type="submit" isLoading={isLoading}>
            {t("auth:login")}
          </PrimaryButton>

          <FormLink>{t("auth:createAccount")}</FormLink>
          <FormLink>{t("auth:forgetPassword")}</FormLink>
        </FormWrapper>
      )}
    </CustomForm>
  );
};

const FormWrapper = styled.div`
  padding: 10px 20px;
`;

export default LoginForm;
