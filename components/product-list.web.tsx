import { Product } from "@/schemas/product-schema";
import { ScrollView, View } from "react-native";
import { ProductCard } from "./product-card";

interface Props {
	data: Product[];
}

export const ProductList = ({ data }: Props) => {
	return (
		<ScrollView
			contentContainerClassName="flex-row flex-wrap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-2"
			showsVerticalScrollIndicator={false}
		>
			{data.map((item) => (
				<View className="p-2" key={item.id}>
					<ProductCard {...item} />
				</View>
			))}
		</ScrollView>
	);
};
