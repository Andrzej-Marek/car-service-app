import { FormLink, PrimaryButton, TextField } from "@/components";
import { CustomForm } from "@/containers";
import { login } from "@/shared/actions";
import { useAuthContext } from "@/shared/context";
import { LoginDto } from "@/shared/dtos";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import styled from "styled-components";
import { loginFormInitialValues } from "./loginForm.initialValues";
import { loginFormSchema } from "./loginForm.schema";

interface OwnProps {}

type Props = OwnProps;

const TEXT_FIELD_BOTTOM_SPACE = 20;

const LoginForm: FC<Props> = () => {
  const { t } = useTranslation(["fields", "auth"]);
  const { setUser } = useAuthContext();

  const [loginAction, { isLoading }] = useMutation(login);

  const onSubmitHandler = async (loginDto: LoginDto) => {
    try {
      const userData = await loginAction(loginDto);

      if (userData) {
        setUser(userData.data.user);
      }
    } catch (error) {
      console.log("ERROR");
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
            space={{ bottom: TEXT_FIELD_BOTTOM_SPACE }}
          />
          <TextField
            name="password"
            label={t("password.label")}
            space={{ bottom: TEXT_FIELD_BOTTOM_SPACE }}
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
