import { ProductInCart } from "@/schemas/cart-schema";
import { useCallback } from "react";
import { FlatList, ListRenderItem, TouchableOpacity, View } from "react-native";
import { CartItem } from "./cart-item";
import Text from "./design-system/text";
import { Link, useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "./design-system/colors";
import { useCart } from "@/hooks/use-cart";
import Button from "./design-system/button";
import { toCurrency } from "@/utils/currency";

interface Props {
	data: ProductInCart[];
}

export const CartList = ({ data }: Props) => {
	const { goBack } = useNavigation();
	const { checkout, totalPrice } = useCart();

	const renderCartItem: ListRenderItem<ProductInCart> = useCallback(
		({ item }) => <CartItem data={item} />,
		[],
	);

	const renderEmpty = useCallback(
		() => (
			<View className="items-center justify-center h-96" style={{ gap: 16 }}>
				<Feather name="shopping-cart" className="text-gray-400" size={42} />
				<Text.Label>Cart is empty</Text.Label>
			</View>
		),
		[],
	);

	const renderSeparator = useCallback(
		() => <View className="bg-gray-200 mx-4" style={{ height: 1 }} />,
		[],
	);

	const renderFooter = useCallback(() => {
		if (!data.length) {
			return (
				<TouchableOpacity
					onPress={goBack}
					className="bg-blue h-10 rounded-2xl flex-row items-center justify-center px-4 m-4"
					style={{ gap: 8 }}
				>
					<Text.Button className="text-white">Browse Products</Text.Button>
					<Feather
						name="arrow-right"
						size={16}
						color={colors.white}
						style={{ marginTop: 4 }}
					/>
				</TouchableOpacity>
			);
		}

		return (
			<>
				{renderSeparator()}

				<View className="p-4" style={{ gap: 8 }}>
					<Text.Title className="text-right">
						Total: {toCurrency(totalPrice)}
					</Text.Title>
					<Button.Primary onPress={checkout}>Check Out</Button.Primary>
				</View>
			</>
		);
	}, [data, goBack, checkout, totalPrice, renderSeparator]);

	return (
		<FlatList
			data={data}
			renderItem={renderCartItem}
			ListEmptyComponent={renderEmpty}
			contentContainerClassName="bg-white rounded-xl"
			className="p-4"
			ItemSeparatorComponent={renderSeparator}
			ListFooterComponent={renderFooter}
		/>
	);
};
