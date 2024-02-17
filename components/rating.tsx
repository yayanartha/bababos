import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { colors } from "./design-system/colors";
import Text from "./design-system/text";

interface Props {
	rate: number;
	count: number;
	minimized?: boolean;
}

export const Rating = ({ rate = 0, count = 0, minimized }: Props) => {
	return (
		<View className="flex-row items-center" style={{ gap: 4 }}>
			<AntDesign name="star" size={16} color={colors.yellow} />

			<View className="flex-row items-center" style={{ gap: 4 }}>
				<Text testID="product-rate">{rate}</Text>
				<Text
					testID="product-rate-count"
					className="text-gray-400"
				>{`(${count}${minimized ? "" : " rating"})`}</Text>
			</View>
		</View>
	);
};
