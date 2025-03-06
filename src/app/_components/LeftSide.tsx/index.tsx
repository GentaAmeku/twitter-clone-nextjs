import { Anchor, Flex, Space, Stack, Text } from "@/lib/mantine/core";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import Link from "next/link";
import LoginForm from "./components/LoginForm";
import ResponsiveContainer from "./components/ResponsiveContainer";

export default function LeftSide() {
  return (
    <ResponsiveContainer>
      <Stack gap="lg" align="center">
        <IconBrandTwitterFilled size={92} color="var(--color-twitter)" />
        <Text size="xl" c="var(--color-gray-500)" fw={600}>
          Welcome Back
        </Text>
      </Stack>
      <Space h="xl" />
      <Space h="md" />
      <LoginForm />
      <Space h="xl" />
      <Space h="md" />
      <Flex justify="center">
        <Text c="var(--color-gray-600)">Don't have an account yet?</Text>
        <Anchor underline="always" ml={10} component={Link} href="#">
          Sign up
        </Anchor>
      </Flex>
    </ResponsiveContainer>
  );
}
