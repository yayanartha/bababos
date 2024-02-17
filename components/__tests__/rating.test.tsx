import { cleanup, render, screen } from "@testing-library/react-native";
import { Rating } from "../rating";

describe("rating", () => {
	afterEach(cleanup);

	it("renders correctly", () => {
		render(<Rating rate={4.5} count={213} />);
		expect(screen.getByTestId("product-rate").props.children).toEqual(4.5);
		expect(screen.getByTestId("product-rate-count").props.children).toEqual(
			"(213 rating)",
		);
	});

	it("renders correctly on minimized card", () => {
		render(<Rating rate={3.9} count={437} minimized />);
		expect(screen.getByTestId("product-rate").props.children).toEqual(3.9);
		expect(screen.getByTestId("product-rate-count").props.children).toEqual(
			"(437)",
		);
	});
});
