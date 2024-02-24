import { cleanup, render, screen } from "@testing-library/react-native";
import { ShoppingCartButton } from "../shopping-cart-button";
import { CartStorage, cartStorageKeys } from "@/storages/cart-storage";
import { productsMock } from "@/__mocks__/products-mock";

describe("shopping-cart-button", () => {
	afterEach(() => {
		cleanup();
		CartStorage.clearAll();
	});

	it("should not render product count if nothing in cart", () => {
		render(<ShoppingCartButton />);
		expect(screen.queryByTestId("shopping-cart-count")).not.toBeOnTheScreen();
	});

	it("should render number of product in cart if count > 0", () => {
		CartStorage.set(
			`${cartStorageKeys.PRODUCTS_IN_CART}-1`,
			JSON.stringify([
				{
					product: {
						id: productsMock[1].id,
						title: productsMock[1].title,
						price: productsMock[1].price,
					},
					qty: 2,
				},
				{
					product: {
						id: productsMock[2].id,
						title: productsMock[2].title,
						price: productsMock[2].price,
					},
					qty: 1,
				},
			]),
		);
		render(<ShoppingCartButton />);
		expect(screen.getByTestId("shopping-cart-count").props.children).toEqual(2);
	});
});
