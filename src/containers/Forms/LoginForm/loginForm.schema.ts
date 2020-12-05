import { LoginDto } from "@/shared/dtos";
import { Yup } from "@/shared/utils";

export const loginFormSchema = Yup.object().shape<LoginDto>({
  identifier: Yup.string().email().min(3).max(64).required(),
  password: Yup.string().min(6).max(64).required(),
});
