"use client";

import MyAvatar from "@/app/(3col)/_components/MyAvatar";
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Textarea,
} from "@/app/_lib/mantine/core";
import { getFormProps, getTextareaProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import {
  IconGif,
  IconMoodSmile,
  IconPhoto,
  IconWorld,
} from "@tabler/icons-react";
import { useActionState, useEffect } from "react";
import { useSWRConfig } from "swr";
import { unstable_serialize } from "swr/infinite";
import { post } from "./actions";
import { postSchema } from "./schema";

export default function PostInputForm() {
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
      <Box px={20} pt={20}>
        <Flex align="flex-start">
          <MyAvatar size={40} />
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
