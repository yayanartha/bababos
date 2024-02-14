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
				name="detail-[productId]"
				options={{ title: "Product Detail" }}
			/>
			<Stack.Screen name="cart" options={{ title: "Shopping Cart" }} />
		</Stack>
	);
}
