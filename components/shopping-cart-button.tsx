import { useCart } from "@/hooks/use-cart";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View, Platform } from "react-native";

export const ShoppingCartButton = () => {
	const { productsInCart } = useCart();

	return (
		<Link href={"/(app)/(tabs)/(home)/cart"} asChild>
			<Pressable
				className="w-12 h-12 rounded-full items-center justify-center"
				style={{ marginRight: Platform.OS === "web" ? 16 : 0 }}
			>
				<Feather name="shopping-cart" size={24} />

				{!!productsInCart?.length && (
					<View className="absolute top-0 -right-2 bg-blue w-6 h-6 rounded-full items-center justify-center">
						<Text testID="shopping-cart-count" className="text-white text-xs">
							{productsInCart.length}
						</Text>
					</View>
				)}
			</Pressable>
		</Link>
	);
};
