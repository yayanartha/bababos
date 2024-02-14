import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const ShoppingCartButton = () => {
	return (
		<Link href={"/(app)/(tabs)/(home)/cart"} asChild>
			<Pressable className="w-12 h-12 rounded-full items-center justify-center">
				<Feather name="shopping-cart" size={24} />

				<View className="absolute top-0 -right-2 bg-blue w-6 h-6 rounded-full items-center justify-center">
					<Text className="text-white text-xs">{5}</Text>
				</View>
			</Pressable>
		</Link>
	);
};
