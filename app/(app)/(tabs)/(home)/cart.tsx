import { CartList } from "@/components/cart-list";
import { useCart } from "@/hooks/use-cart";
import { Text, View } from "react-native";

export default function Cart() {
	const { productsInCart } = useCart();

	return (
		<View className="flex-1 container">
			<CartList data={productsInCart || []} />
		</View>
	);
}
