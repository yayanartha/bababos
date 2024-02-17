import { ProductInCart } from "@/schemas/cart-schema";
import { ProductCart, ProductDetail } from "@/schemas/product-schema";
import { useProductsInCart } from "@/storages/cart-storage";
import { useCallback, useMemo } from "react";

export const useCart = () => {
	const [productsInCart, setProductsInCart] = useProductsInCart(1);

	const productsInCartMap: Map<number, ProductInCart> = useMemo(() => {
		if (!productsInCart) return new Map([]);

		return new Map(productsInCart.map((p) => [p.product.id, p]));
	}, [productsInCart]);

	const addQty = useCallback(
		(product: ProductDetail | ProductCart) => {
			const p = productsInCartMap.get(product.id);

			if (!p) {
				return productsInCartMap.set(product.id, {
					product: {
						id: product.id,
						price: product.price,
						title: product.title,
					},
					qty: 1,
				});
			}

			return productsInCartMap.set(product.id, {
				...p,
				qty: p.qty + 1,
			});
		},
		[productsInCartMap],
	);

	const removeQty = useCallback(
		(product: ProductCart) => {
			const p = productsInCartMap.get(product.id);

			if (!p) {
				return productsInCartMap;
			}

			const nextQty = p.qty - 1;

			if (nextQty > 0) {
				return productsInCartMap.set(product.id, {
					...p,
					qty: p.qty - 1,
				});
			}

			return productsInCartMap.delete(product.id);
		},
		[productsInCartMap],
	);

	const updateCart = useCallback(() => {
		setProductsInCart(
			Array.from(productsInCartMap).map(([id, p]) => ({
				product: p.product,
				qty: p.qty,
			})),
		);
	}, [productsInCartMap, setProductsInCart]);

	const addToCart = useCallback(
		(product: ProductDetail | ProductCart) => {
			addQty(product);
			updateCart();
		},
		[addQty, updateCart],
	);

	const removeFromCart = useCallback(
		(product: ProductCart) => {
			removeQty(product);
			updateCart();
		},
		[removeQty, updateCart],
	);

	return {
		productsInCart,
		productsInCartMap,
		addToCart,
		removeFromCart,
	};
};
