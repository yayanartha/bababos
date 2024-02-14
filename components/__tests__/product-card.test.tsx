import { cleanup, render, screen } from "@testing-library/react-native";
import { ProductCard } from "../product-card";
import { productsMock } from "@/__mocks__/products-mock";

describe("Product Card", () => {
	afterEach(cleanup);

	it("should render product card properly", () => {
		const product = productsMock[0];
		render(<ProductCard {...product} />);

		expect(screen.getByTestId("product-card-image").props.source).toEqual([
			{ uri: product.image },
		]);
		expect(screen.getByTestId("product-card-title").props.children).toEqual(
			product.title,
		);
		expect(screen.getByTestId("product-card-category").props.children).toEqual(
			product.category,
		);
		expect(screen.getByTestId("product-card-price").props.children).toEqual(
			product.price,
		);
		expect(screen.getByTestId("product-card-rate").props.children).toEqual(
			product.rating.rate,
		);
	});
});
