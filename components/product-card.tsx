import { Product } from "@/schemas/product-schema";
import { Image } from "expo-image";
import { Text, View } from "react-native";

export const ProductCard = ({
	id,
	title,
	category,
	price,
	image,
	rating,
}: Product) => {
	return (
		<View>
			<Image testID="product-card-image" source={{ uri: image }} />
			<Text testID="product-card-title">{title}</Text>
			<Text testID="product-card-category">{category}</Text>
			<Text testID="product-card-price">{price}</Text>
			<Text testID="product-card-rate">{rating.rate}</Text>
		</View>
	);
};
