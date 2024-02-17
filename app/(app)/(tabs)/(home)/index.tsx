import { productsMock } from "@/__mocks__/products-mock";
import { ProductCard } from "@/components/product-card";
import { ProductList } from "@/components/product-list";
import { Product } from "@/schemas/product-schema";
import { useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 md:container">
			{<ProductList data={productsMock} />}

			{/* <View className="flex-1 md:hidden">
				
			</View>

			<View className="flex-1 max-md:hidden md:visible">
				<FlatList
					data={productsMock}
					numColumns={4}
					contentContainerClassName="px-2 py-4"
					renderItem={renderProduct}
					ItemSeparatorComponent={renderSeparator}
					showsVerticalScrollIndicator={false}
				/>
			</View> */}
		</View>
	);
}
