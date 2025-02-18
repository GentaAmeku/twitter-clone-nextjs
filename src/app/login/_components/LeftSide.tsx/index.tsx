"use client";

import { useIsMd } from "@/app/_lib/hooks";
import {
	Anchor,
	Button,
	Flex,
	Input,
	Space,
	Stack,
	Text,
} from "@/app/_lib/mantine/core";
import { cn } from "@/app/_lib/utils";
import { IconArrowRight, IconBrandTwitterFilled } from "@tabler/icons-react";

export default function LeftSide() {
	const isMd = useIsMd();
	return (
		<div className={cn("flex-1 py-25", { "px-20": !isMd, "px-10": isMd })}>
			<Stack gap="lg" align="center">
				<IconBrandTwitterFilled size={92} color="var(--color-twitter)" />
				<Text size="xl" c="var(--color-gray-500)" fw={600}>
					Welcome Back
				</Text>
			</Stack>
			<Space h="xl" />
			<Space h="md" />
			<Stack gap="lg" align="stretch">
				<Input placeholder="Phone,email, or username" />
				<Input placeholder="Password" />
			</Stack>
			<Space h="sm" />
			<Anchor href="#" underline="always" ml={8}>
				forgot password?
			</Anchor>
			<Space h="xl" />
			<Space h="sm" />
			<Stack>
				<Button
					fullWidth
					color="var(--color--twitter)"
					radius="md"
					className="shadow-md relative"
				>
					Login
					<div className="absolute right-1 top-1">
						<IconArrowRight size={26} />
					</div>
				</Button>
				<Button
					fullWidth
					color="black"
					radius="md"
					className="shadow-md relative"
				>
					Guest Login (Dev)
					<div className="absolute right-1 top-1">
						<IconArrowRight size={26} />
					</div>
				</Button>
			</Stack>
			<Space h="xl" />
			<Space h="md" />
			<Flex justify="center">
				<Text c="var(--color-gray-600)">Don't have an account yet?</Text>
				<Anchor underline="always" ml={10}>
					Sign up
				</Anchor>
			</Flex>
		</div>
	);
}
