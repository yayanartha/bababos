import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export const ShoppingCartButton = () => {
	const router = useRouter();

	return (
		<TouchableOpacity onPress={() => router.push("/(app)/(tabs)/(home)/cart")}>
			<Feather name="shopping-cart" size={24} />
		</TouchableOpacity>
	);
};
