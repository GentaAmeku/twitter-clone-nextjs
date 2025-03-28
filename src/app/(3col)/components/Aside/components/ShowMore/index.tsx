import { Flex, Text } from "@/lib/mantine/core";

export default function ShowMore() {
  return (
    <Flex
      justify="space-between"
      align="center"
      className="w-full cursor-pointer hover:bg-gray-100 transition-colors overflow-hidden"
      p="md"
    >
      <Text size="md" c="rgb(29, 155, 240)" fw={500} inline>
        Show more
      </Text>
    </Flex>
  );
}
