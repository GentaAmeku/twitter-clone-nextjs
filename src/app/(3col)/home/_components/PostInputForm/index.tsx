"use client";

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Textarea,
} from "@/lib/mantine/core";
import type { User } from "@/types";
import { getFormProps, getTextareaProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import {
  IconGif,
  IconMoodSmile,
  IconPhoto,
  IconWorld,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { useSWRConfig } from "swr";
import { unstable_serialize } from "swr/infinite";
import { post } from "./actions";
import { postSchema } from "./schema";

type PostInputFormProps = {
  user: User;
};

export default function PostInputForm({ user }: PostInputFormProps) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [lastResult, action, isPending] = useActionState(post, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: postSchema });
    },
    shouldValidate: "onSubmit",
  });
  const isDisabled: boolean = !fields.text.value;

  const handleClickAvatar = () => router.push(`/${user.user_id}`);

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    if (lastResult?.status === "success") {
      mutate(
        unstable_serialize(() => {
          return "/api/posts?limit=10";
        }),
      );
    }
  }, [lastResult]);

  return (
    <form action={action} {...getFormProps(form)}>
      <Box pl={16} pr={20} pt={20}>
        <Flex align="flex-start">
          <ActionIcon variant="subtle" radius="xl" size={43} color="white">
            <Avatar
              radius="xl"
              size={42}
              key={user.name}
              name={user.name}
              color="initials"
              onClick={handleClickAvatar}
            />
          </ActionIcon>
          <Flex direction="column" className="ml-3 w-full">
            <Textarea
              {...getTextareaProps(fields.text)}
              defaultValue={""}
              key={fields.text.key}
              variant="unstyled"
              size="lg"
              placeholder="What is happening?!"
              className="!pt-0"
              autosize
              minRows={1}
              styles={{ input: { padding: 0 } }}
            />
            <Button
              size="compact-xs"
              radius="xl"
              variant="subtle"
              leftSection={<IconWorld size={18} className="-mr-1" />}
              className="-ml-2 !w-[170px]"
            >
              <Text fw={500} className="tracking-tighter">
                Everyone can reply
              </Text>
            </Button>
            <Divider my="sm" />
            <Flex justify="space-between">
              <Flex gap={2} className="-ml-2">
                <ActionIcon
                  variant="subtle"
                  radius="xl"
                  size={36}
                  aria-label="image"
                >
                  <IconPhoto size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  radius="xl"
                  size={36}
                  aria-label="image"
                >
                  <IconGif size={24} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  radius="xl"
                  size={36}
                  aria-label="image"
                >
                  <IconMoodSmile size={20} />
                </ActionIcon>
              </Flex>
              <Button
                radius="xl"
                color="var(--color-twitter)"
                type="submit"
                disabled={isDisabled || isPending}
                loading={isPending}
              >
                <Text fw={500}>Post</Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Divider mt="sm" />
    </form>
  );
}
