import { Slot } from "expo-router";
import { View } from "react-native";

export default function ProductLayout() {
	return (
		<View className="flex-1 bg-white">
			<Slot />
		</View>
	);
}
