import { cleanup, render, screen } from "@testing-library/react-native";
import { ShoppingCartButton } from "../shopping-cart-button";

describe("shopping-cart-button", () => {
	afterEach(cleanup);

	it("should not render product count if nothing in cart", () => {
		render(<ShoppingCartButton />);
		expect(screen.queryByTestId("shopping-cart-count")).not.toBeOnTheScreen();
	});

	it("should render number of product in cart if count > 0", () => {
		render(<ShoppingCartButton productInCartCount={5} />);
		expect(screen.getByTestId("shopping-cart-count").props.children).toEqual(5);
	});
});
