import { ProductInCart } from "@/schemas/cart-schema";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";
import Text from "./design-system/text";
import { toCurrency } from "@/utils/currency";
import { useCart } from "@/hooks/use-cart";
import { Feather } from "@expo/vector-icons";
import { useMemo } from "react";

interface Props {
	data: ProductInCart;
}

export const CartItem = ({ data }: Props) => {
	const { productsInCartMap, addToCart, removeFromCart } = useCart();
	const qtyInCart = productsInCartMap.get(data.product.id)?.qty || 0;

	const price = useMemo(() => data.product.price * data.qty, [data]);

	return (
		<View className="flex-row items-center p-4" style={{ gap: 16 }}>
			<TouchableOpacity className="flex-1 flex-row" style={{ gap: 16 }}>
				<Image
					source={{ uri: data.product.image }}
					style={{ width: 100, height: 100, borderRadius: 16 }}
					contentFit="contain"
				/>
				<View className="flex-1" style={{ gap: 8 }}>
					<Text.Title numberOfLines={2}>{data.product.title}</Text.Title>
					<Text.Button className="text-blue">{toCurrency(price)}</Text.Button>
				</View>

				<View className="w-1/4 flex-row items-center self-center">
					<TouchableOpacity
						className="rounded-l-lg border border-gray-300 w-8 h-8 items-center justify-center"
						onPress={() => removeFromCart(data.product.id)}
					>
						<Feather name="minus" />
					</TouchableOpacity>

					<View className="w-12 h-8 bg-grey items-center justify-center border-t border-b border-t-gray-200 border-b-gray-200">
						<Text>{qtyInCart}</Text>
					</View>

					<TouchableOpacity
						className="rounded-r-lg border border-gray-300 w-8 h-8 items-center justify-center"
						onPress={() => addToCart(data.product)}
					>
						<Feather name="plus" />
					</TouchableOpacity>
				</View>
			</TouchableOpacity>
		</View>
	);
};
