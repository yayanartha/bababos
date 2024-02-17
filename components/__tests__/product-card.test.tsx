import { cleanup, render, screen } from "@testing-library/react-native";
import { ProductCard } from "../product-card";
import { productsMock } from "@/__mocks__/products-mock";
import { configureNumeral } from "@/utils/configure-numeral";

describe("Product Card", () => {
	afterEach(cleanup);

	beforeAll(() => {
		configureNumeral();
	});

	it("should render product card properly", () => {
		const product = productsMock[0];
		render(<ProductCard {...product} />);

		expect(screen.getByTestId("product-card-image").props.source).toEqual([
			{ uri: product.image },
		]);
		expect(screen.getByTestId("product-card-title").props.children).toEqual(
			product.title,
		);
		expect(screen.getByTestId("product-rate").props.children).toEqual(
			product.rating.rate,
		);
		expect(screen.getByTestId("product-rate-count").props.children).toEqual(
			`(${product.rating.count})`,
		);
		expect(screen.getByTestId("product-card-price").props.children).toEqual(
			`$${product.price}`,
		);
	});
});
