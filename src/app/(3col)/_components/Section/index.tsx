import { Space } from "@/app/_lib/mantine/core";

type SectionProps = { title: string; children: React.ReactNode };

export default function Section({ title, children }: SectionProps) {
	return (
		<section className="border rounded-xl min-w-full">
			<h2 className="text-xl font-bold px-4 pt-3">{title}</h2>
			<Space h="md" />
			{children}
		</section>
	);
}
