import { cleanup, render, screen } from "@testing-library/react-native";
import { ProductList as ProductListMobile } from "../product-list";
import { ProductList as ProductListWeb } from "../product-list.web";
import { productsMock } from "@/__mocks__/products-mock";
import { Product } from "@/schemas/product-schema";

describe("product-list", () => {
	afterEach(cleanup);

	it("renders correctly on mobile", () => {
		render(<ProductListMobile data={productsMock} />);
		const listProps = screen.getByTestId("product-list").props;
		expect(listProps.data.length).toEqual(productsMock.length);
		(listProps.data as Product[]).forEach((element, key) => {
			expect(element.id).toEqual(productsMock[key].id);
		});
	});

	it("renders correctly on web", () => {
		render(<ProductListWeb data={productsMock} />);
		const cards = screen.queryAllByTestId("product-card");
		expect(cards.length).toEqual(productsMock.length);
		for (const o of productsMock) {
			expect(screen.getByText(o.title)).toBeOnTheScreen();
		}
	});
});
