import { ProductInCart } from "@/schemas/cart-schema";
import { MMKV, useMMKVObject } from "react-native-mmkv";

export const cartStorageKeys = {
	PRODUCTS_IN_CART: "access-token",
};

export const CartStorage = new MMKV({
	id: "cart-storage",
});

export const useCartStorage = (userId: number) =>
	useMMKVObject<ProductInCart[]>(
		`${cartStorageKeys.PRODUCTS_IN_CART}-${userId}`,
		CartStorage,
	);
