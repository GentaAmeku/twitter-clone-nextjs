"use client";

import {
  Anchor,
  Button,
  Input,
  Paper,
  PasswordInput,
  Space,
  Stack,
  Text,
} from "@/app/_lib/mantine/core";
import type { User } from "@/app/_types";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { IconArrowRight } from "@tabler/icons-react";
import { useActionState } from "react";
import { login } from "./actions";
import { loginSchema } from "./schema";

type LoginFormProps = {
  guest: User;
};

export default function LoginForm({ guest }: LoginFormProps) {
  const [lastResult, action, isPending] = useActionState(login, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleGuestLogin = (): void => {
    form.update({
      value: {
        [fields.email.name]: guest.email,
        [fields.password.name]: guest.password,
      },
    });
  };

  return (
    <form action={action} {...getFormProps(form)}>
      {form.errors && (
        <>
          <Paper radius="md" p={10} withBorder className="!bg-red-400">
            {form.errors.map((error) => (
              <Text
                key={error}
                c="white"
                size="md"
                fw={600}
                className="text-center"
              >
                {error}
              </Text>
            ))}
          </Paper>
          <Space h="xl" />
        </>
      )}
      <Stack gap="lg" align="stretch">
        <div>
          <Input
            {...getInputProps(fields.email, {
              type: "email",
            })}
            key={fields.email.key}
            placeholder="Phone,email, or username"
          />
          {fields.email.errors?.map((e, i) => (
            <Text key={e} c="var(--color-red-500)" mt={2} ml={5}>
              {e}
            </Text>
          ))}
        </div>
        <div>
          <PasswordInput
            placeholder="Password"
            {...getInputProps(fields.password, {
              type: "password",
            })}
            key={fields.password.key}
          />
          {fields.password.errors?.map((e, i) => (
            <Text key={e} c="var(--color-red-500)" mt={2} ml={5}>
              {e}
            </Text>
          ))}
        </div>
      </Stack>
      <Space h="sm" />
      <Anchor href="#" underline="always" ml={8}>
        forgot password?
      </Anchor>
      <Space h="xl" />
      <Space h="sm" />
      <Stack>
        <Button
          type="submit"
          color="var(--color--twitter)"
          radius="md"
          className="shadow-md relative"
          fullWidth
          loading={isPending}
          disabled={isPending}
        >
          Login
          <div className="absolute right-1 top-1">
            <IconArrowRight size={26} />
          </div>
        </Button>
        <Button
          color="black"
          radius="md"
          className="shadow-md relative"
          fullWidth
          onClick={handleGuestLogin}
        >
          Debug Account (Dev)
          <div className="absolute right-1 top-1">
            <IconArrowRight size={26} />
          </div>
        </Button>
      </Stack>
    </form>
  );
}
