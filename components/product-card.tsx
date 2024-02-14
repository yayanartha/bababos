import { Product } from "@/schemas/product-schema";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import Text from "./design-system/text";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./design-system/colors";

export const ProductCard = ({
	id,
	title,
	category,
	price,
	image,
	rating,
}: Product) => {
	const router = useRouter();
	const { width: screenWidth } = useWindowDimensions();

	const cardWidth = (screenWidth - 32 - 16) / 2;

	return (
		<Link
			href={{
				pathname: "/(app)/(tabs)/(home)/detail-[productId]",
				params: { productId: id },
			}}
			asChild
		>
			<Pressable
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
					<View>
						<Text.Button testID="product-card-title" numberOfLines={1}>
							{title}
						</Text.Button>
						<Text.Label testID="product-card-category">{category}</Text.Label>
					</View>

					<View className="flex-row items-center justify-between">
						<View className="flex-row items-center" style={{ gap: 4 }}>
							<AntDesign name="star" size={16} color={colors.yellow} />
							<Text testID="product-card-rate">{rating.rate}</Text>
						</View>

						<Text.Title
							className="text-blue font-semibold"
							testID="product-card-price"
						>
							${price}
						</Text.Title>
					</View>
				</View>
			</Pressable>
		</Link>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 120,
	},
});
