import { cleanup, render } from "@testing-library/react-native";
import ProductDetailScreen from "../(app)/(tabs)/(home)/product/[id]";

describe("product-detail", () => {
	afterEach(cleanup);

	it("renders properly", () => {
		render(<ProductDetailScreen />);
	});
});
