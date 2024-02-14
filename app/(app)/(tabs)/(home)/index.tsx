import { productsMock } from "@/__mocks__/products-mock";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/schemas/product-schema";
import { useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";

export default function Index() {
	const renderProduct: ListRenderItem<Product> = useCallback(
		({ item, index }) => (
			<View className="flex-1 px-2">
				<ProductCard {...item} />
			</View>
		),
		[],
	);

	const renderSeparator = useCallback(() => <View className="w-4 h-4" />, []);

	return (
		<View className="flex-1 md:container">
			<FlatList
				data={productsMock}
				numColumns={2}
				contentContainerClassName="px-2 py-4"
				renderItem={renderProduct}
				ItemSeparatorComponent={renderSeparator}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
