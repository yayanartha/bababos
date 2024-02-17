import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const ShoppingCartButton = ({ productInCartCount = 0 }) => {
	return (
		<Link href={"/(app)/(tabs)/(home)/cart"} asChild>
			<Pressable className="w-12 h-12 rounded-full items-center justify-center md:mr-6">
				<Feather name="shopping-cart" size={24} />

				{productInCartCount > 0 && (
					<View className="absolute top-0 -right-2 bg-blue w-6 h-6 rounded-full items-center justify-center">
						<Text testID="shopping-cart-count" className="text-white text-xs">
							{productInCartCount}
						</Text>
					</View>
				)}
			</Pressable>
		</Link>
	);
};
