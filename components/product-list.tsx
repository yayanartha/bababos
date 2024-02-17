import { Product } from "@/schemas/product-schema";
import { useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { ProductCard } from "./product-card";

interface Props {
	data: Product[];
}

export const ProductList = ({ data }: Props) => {
	const renderProduct: ListRenderItem<Product> = useCallback(
		({ item }) => (
			<View className="flex-1 px-2">
				<ProductCard {...item} />
			</View>
		),
		[],
	);

	const renderSeparator = useCallback(() => <View className="w-4 h-4" />, []);

	return (
		<FlatList
			testID="product-list"
			data={data}
			numColumns={2}
			contentContainerClassName="px-2 py-4"
			renderItem={renderProduct}
			ItemSeparatorComponent={renderSeparator}
			showsVerticalScrollIndicator={false}
		/>
	);
};
