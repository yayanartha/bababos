import { productsMock } from "@/__mocks__/products-mock";
import { ProductList } from "@/components/product-list";
import { View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 md:container">
			<ProductList data={productsMock} />
		</View>
	);
}
