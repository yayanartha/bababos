import { Product } from "@/schemas/product-schema";
import { Image } from "expo-image";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Text from "./design-system/text";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./design-system/colors";
import { Link } from "expo-router";
import { toCurrency } from "@/utils/currency";
import { Rating } from "./rating";

export const ProductCard = (props: Product) => {
	const { id, title, category, price, image, rating, description } = props;

	return (
		<Link
			href={{
				pathname: `/(app)/(tabs)/(home)/product/${id}`,
				params: {
					title,
					category,
					price,
					image,
					rating_rate: rating.rate,
					rating_count: rating.count,
					description,
				},
			}}
			asChild
		>
			<TouchableOpacity
				testID="product-card"
				className="rounded-xl bg-white overflow-hidden p-4"
				style={{ gap: 8 }}
			>
				<Image
					testID="product-card-image"
					source={{ uri: image }}
					style={styles.image}
					contentFit="contain"
				/>

				<View style={{ gap: 8 }}>
					<View className="h-12">
						<Text.Button testID="product-card-title" numberOfLines={2}>
							{title}
						</Text.Button>
					</View>

					<View className="flex-row items-center justify-between">
						<Rating rate={rating.rate} count={rating.count} minimized />

						<Text.Title
							className="text-blue font-semibold"
							testID="product-card-price"
						>
							{toCurrency(price)}
						</Text.Title>
					</View>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 120,
	},
});
