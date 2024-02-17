import { cleanup, render } from "@testing-library/react-native";
import Index from "../(app)/(tabs)/(home)";

describe("home", () => {
	afterEach(cleanup);

	it("renders properly", () => {
		render(<Index />);
	});
});
