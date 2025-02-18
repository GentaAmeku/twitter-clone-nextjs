import { Card, Container, Flex } from "@/app/_lib/mantine/core";
import { cn } from "../_lib/utils";
import { PAGE_SIZE } from "../_styles/layout";
import LeftSide from "./_components/LeftSide.tsx";
import RightSide from "./_components/RightSide";

export default function Login() {
	return (
		<div className="relative h-screen w-screen">
			<div
				className={cn(
					"h-[80vh]",
					["bg-gradient-to-r from-sky-300 to-sky-400"],
					["[clip-path:polygon(0_0,_100%_0,_100%_calc(100%-70%),_0_100%)]"],
				)}
			/>
			<Container
				size={PAGE_SIZE}
				h="fit-content"
				className="absolute top-0 right-0 bottom-0 left-0 m-auto w-4/5"
			>
				<Card radius="lg" p={0} className="!shadow-xl">
					<Flex gap={0} className="w-full">
						<LeftSide />
						<RightSide />
					</Flex>
				</Card>
			</Container>
		</div>
	);
}
