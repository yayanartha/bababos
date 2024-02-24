import { colors } from "@/components/design-system/colors";
import Text from "@/components/design-system/text";
import { useAuth } from "@/providers/auth-provider";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

export default function Profile() {
	const { signOut } = useAuth();

	return (
		<View className="items-center py-8" style={{ gap: 64 }}>
			<Text.H1>Welcome!</Text.H1>

			<TouchableOpacity
				onPress={signOut}
				className="bg-red-500 rounded-2xl items-center justify-center h-10 px-4 flex-row"
				style={{ gap: 8 }}
			>
				<Feather name="log-out" size={16} color={colors.white} />
				<Text.Button className="text-white">Logout</Text.Button>
			</TouchableOpacity>
		</View>
	);
}
