import { Col, Flex, Space, Text } from "@/lib/mantine/core";
import {
  IconBell,
  IconDotsCircleHorizontal,
  IconHome,
  IconMail,
  IconSearch,
} from "@tabler/icons-react";
import HeaderBox from "../HeaderBox";
import BrandActionIcon from "./components/BrandActionIcon";
import NaviButton from "./components/NaviButton";
import PostButton from "./components/PostButton";
import ProfileButton from "./components/ProfileButton";
import ProfileLink from "./components/ProfileLink";
import ResponsiveStack from "./components/ResponsiveStack";

export default function Navigation() {
  return (
    <Col
      span="content"
      className="sticky top-0 self-start hidden md:inline-block"
    >
      <nav>
        <Flex direction="column" justify="space-between" h="100vh">
          <div>
            <HeaderBox>
              <Flex
                mih="100%"
                justify="flex-start"
                align="center"
                className="px-2"
              >
                <BrandActionIcon />
              </Flex>
            </HeaderBox>
            <ResponsiveStack>
              <NaviButton icon={<IconHome size={28} />} href="/home">
                <Text size="xl" fw={600} inline>
                  Home
                </Text>
              </NaviButton>
              <NaviButton icon={<IconSearch size={28} />} href="/explore">
                <Text size="xl" fw={600} inline>
                  Explore
                </Text>
              </NaviButton>
              <NaviButton icon={<IconBell size={28} />}>
                <Text size="xl" fw={600} inline td="line-through">
                  Notifications
                </Text>
              </NaviButton>
              <NaviButton icon={<IconMail size={28} />}>
                <Text size="xl" fw={600} inline td="line-through">
                  Messages
                </Text>
              </NaviButton>
              <ProfileLink />
              <NaviButton icon={<IconDotsCircleHorizontal size={28} />}>
                <Text size="xl" fw={600} inline td="line-through">
                  More
                </Text>
              </NaviButton>
            </ResponsiveStack>
            <Space h="xl" />
            <Flex justify="center" className="w-full">
              <PostButton />
            </Flex>
          </div>
          <Flex justify="center">
            <ProfileButton />
          </Flex>
        </Flex>
      </nav>
    </Col>
  );
}
