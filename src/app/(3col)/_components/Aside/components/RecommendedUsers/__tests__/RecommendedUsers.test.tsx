import RecommendedUsers from "@/app/(3col)/_components/Aside/components/RecommendedUsers/presentational";
import { render, screen } from "@/lib/utils/test";
import type { User } from "@/types";
import "@testing-library/jest-dom";

const users: User[] = [
  {
    id: "1",
    name: "Alice",
    user_id: "@alice",
    email: "",
    password: "",
    followers: [],
    following: [],
  },
  {
    id: "2",
    name: "Bob",
    user_id: "@bob",
    email: "",
    password: "",
    followers: [],
    following: [],
  },
];

describe("RecommendedUsers", () => {
  test("should render the Section", () => {
    render(<RecommendedUsers users={users} />);
    expect(screen.getByText("Who to follow")).toBeInTheDocument();
  });

  test("should render the Users List", () => {
    render(<RecommendedUsers users={users} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  test("should render the ShowMore", () => {
    render(<RecommendedUsers users={users} />);
    expect(screen.getByText("Show more")).toBeInTheDocument();
  });
});
