import { Col, Flex, Space } from "@/app/_lib/mantine/core";
import {
  IconBell,
  IconDotsCircleHorizontal,
  IconHome,
  IconMail,
  IconSearch,
  IconUser,
} from "@tabler/icons-react";
import HeaderBox from "../HeaderBox";
import BrandActionIcon from "./components/BrandActionIcon";
import NaviButton from "./components/NaviButton";
import PostButton from "./components/PostButton";
import ProfileButton from "./components/ProfileButton";
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
              <NaviButton icon={<IconHome size={28} />}>Home</NaviButton>
              <NaviButton icon={<IconSearch size={28} />}>Explore</NaviButton>
              <NaviButton icon={<IconBell size={28} />}>
                Notifications
              </NaviButton>
              <NaviButton icon={<IconMail size={28} />}>Messages</NaviButton>
              <NaviButton icon={<IconUser size={28} />}>Profile</NaviButton>
              <NaviButton icon={<IconDotsCircleHorizontal size={28} />}>
                More
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
