import { useMediaQuery } from "@mantine/hooks";

export function useIsSm() {
  return useMediaQuery("(max-width: 640px)");
}

export function useIsMd() {
  return useMediaQuery("(max-width: 768px)");
}

export function useIsXl() {
  return useMediaQuery("(max-width: 1280px)");
}
