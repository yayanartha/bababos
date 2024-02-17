import { ShoppingCartButton } from "@/components/shopping-cart-button";
import { Stack } from "expo-router";

export default function HomeLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Bababos",
					headerRight: () => <ShoppingCartButton />,
				}}
			/>
			<Stack.Screen
				name="product"
				options={{
					title: "Product Details",
					headerRight: () => <ShoppingCartButton />,
				}}
			/>
			<Stack.Screen name="cart" options={{ title: "Shopping Cart" }} />
		</Stack>
	);
}
