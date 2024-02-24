import { colors } from "@/components/design-system/colors";
import Text from "@/components/design-system/text";
import { Rating } from "@/components/rating";
import { useCart } from "@/hooks/use-cart";
import { ProductDetail } from "@/schemas/product-schema";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";

export default function ProductDetailScreen() {
	const params = useLocalSearchParams() as unknown as ProductDetail;
	const { addToCart } = useCart();

	return (
		<ScrollView
			contentContainerClassName="grow px-4 py-6 md:flex-row md:container md:grow-0"
			contentContainerStyle={{ gap: 24 }}
		>
			<View className="flex-1 md:max-w-52 max-h-60">
				<Image
					source={{ uri: params.image }}
					style={{
						width: "100%",
						height: "100%",
					}}
					contentFit="contain"
				/>
			</View>

			<View className="flex-1" style={{ gap: 16 }}>
				<View style={{ gap: 8 }}>
					<Text.H1>{params.title}</Text.H1>

					<View className="flex-row items-center" style={{ gap: 8 }}>
						<Rating rate={params.rating_rate} count={params.rating_count} />

						<Text>{"•"}</Text>

						<View className="bg-grey px-3 rounded-full self-start">
							<Text.Label>{params.category}</Text.Label>
						</View>
					</View>
				</View>

				<Text>{params.description}</Text>

				<View className="grow" />
			</View>

			<TouchableOpacity
				className="bg-blue h-12 rounded-2xl px-4 flex-row items-center justify-center"
				style={{ gap: 8 }}
				testID="btn-add-to-cart"
				onPress={() => addToCart(params)}
			>
				<Feather name="shopping-cart" size={20} color={colors.white} />
				<Text.Button className="text-white">Add to Cart</Text.Button>
			</TouchableOpacity>
		</ScrollView>
	);
}
