/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  userName: string;
  email: string;
  password: string;
};

const MuiLogin = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <h1> Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
          <TextField
            label="User Name"
            type="userName"
            {...register("userName", {
              required: "User Name is required",
            })}
            error={!!errors.userName}
            helperText={errors.userName?.message}
          />
          <TextField
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default MuiLogin;
