"use client";

import { useIsMobile } from "@/app/_lib/hooks";
import { Box, Col, Flex, Space, Stack } from "@/app/_lib/mantine/core";
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
import ProfileButton from "./containers/ProfileButton";

export default function Navigation() {
	const isMoblie = useIsMobile();
	return (
		<Col span={isMoblie ? 1 : 2.7} className="border-r h-screen">
			<nav>
				<Flex direction="column" justify="space-between" h="100vh">
					<Box>
						<HeaderBox>
							<Flex mih="100%" justify="flex-start" align="center" px="sm">
								<BrandActionIcon />
							</Flex>
						</HeaderBox>
						<Stack align="flex-start" justify="center" gap="sm">
							<NaviButton icon={<IconHome size={24} />}>Home</NaviButton>
							<NaviButton icon={<IconSearch size={24} />}>Explore</NaviButton>
							<NaviButton icon={<IconBell size={24} />}>
								Notifications
							</NaviButton>
							<NaviButton icon={<IconMail size={24} />}>Messages</NaviButton>
							<NaviButton icon={<IconUser size={24} />}>Profile</NaviButton>
							<NaviButton icon={<IconDotsCircleHorizontal size={24} />}>
								More
							</NaviButton>
						</Stack>
						<Space h="xl" />
						<Box className="pl-5 pr-9">
							<PostButton />
						</Box>
					</Box>
					<Box className="px-5 py-5">
						<ProfileButton />
					</Box>
				</Flex>
			</nav>
		</Col>
	);
}
