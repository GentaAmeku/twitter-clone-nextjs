import { Loader as MantineLoader, Space } from "@/app/_lib/mantine/core";

type LoaderProps = {
  ref?: React.RefObject<HTMLDivElement>;
};

export default function Loader({ ref }: LoaderProps) {
  return (
    <div className="text-center w-full" ref={ref}>
      <Space h="md" />
      <MantineLoader />
      <Space h="md" />
    </div>
  );
}
