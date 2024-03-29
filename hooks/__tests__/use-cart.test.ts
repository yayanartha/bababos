import { act, cleanup, renderHook } from "@testing-library/react-native";
import { useCart } from "../use-cart";
import { productsMock } from "@/__mocks__/products-mock";
import { ProductInCart } from "@/schemas/cart-schema";
import { CartStorage } from "@/storages/cart-storage";

describe("use-cart", () => {
	afterEach(() => {
		cleanup();
		CartStorage.clearAll();
	});

	const getCartArray = (data: Map<number, ProductInCart>) => {
		return Array.from(data).map(([id, p]) => ({ ...p }));
	};

	it("able to add qty and update the cart", () => {
		const { result } = renderHook(useCart);
		expect(result.current.productsInCart).toEqual(undefined);

		// Add
		act(() => result.current.addToCart(productsMock[1]));
		expect(getCartArray(result.current.productsInCartMap)).toEqual([
			{
				product: {
					id: productsMock[1].id,
					title: productsMock[1].title,
					price: productsMock[1].price,
					image: productsMock[1].image,
				},
				qty: 1,
			},
		]);

		// Add other new product
		act(() => result.current.addToCart(productsMock[2]));
		expect(getCartArray(result.current.productsInCartMap)).toEqual([
			{
				product: {
					id: productsMock[1].id,
					title: productsMock[1].title,
					price: productsMock[1].price,
					image: productsMock[1].image,
				},
				qty: 1,
			},
			{
				product: {
					id: productsMock[2].id,
					title: productsMock[2].title,
					price: productsMock[2].price,
					image: productsMock[2].image,
				},
				qty: 1,
			},
		]);

		// Add more to an existing product
		act(() => result.current.addToCart(productsMock[1]));
		expect(getCartArray(result.current.productsInCartMap)).toEqual([
			{
				product: {
					id: productsMock[1].id,
					title: productsMock[1].title,
					price: productsMock[1].price,
					image: productsMock[1].image,
				},
				qty: 2,
			},
			{
				product: {
					id: productsMock[2].id,
					title: productsMock[2].title,
					price: productsMock[2].price,
					image: productsMock[2].image,
				},
				qty: 1,
			},
		]);
	});

	it("able to decrease qty and update the cart", () => {
		const { result } = renderHook(useCart);
		expect(result.current.productsInCart).toEqual(undefined);

		act(() => result.current.addToCart(productsMock[1]));
		act(() => result.current.addToCart(productsMock[2]));
		act(() => result.current.addToCart(productsMock[1]));

		act(() => result.current.removeFromCart(productsMock[1].id));
		expect(getCartArray(result.current.productsInCartMap)).toEqual([
			{
				product: {
					id: productsMock[1].id,
					title: productsMock[1].title,
					price: productsMock[1].price,
					image: productsMock[1].image,
				},
				qty: 1,
			},
			{
				product: {
					id: productsMock[2].id,
					title: productsMock[2].title,
					price: productsMock[2].price,
					image: productsMock[2].image,
				},
				qty: 1,
			},
		]);

		act(() => result.current.removeFromCart(productsMock[1].id));
		expect(getCartArray(result.current.productsInCartMap)).toEqual([
			{
				product: {
					id: productsMock[2].id,
					title: productsMock[2].title,
					price: productsMock[2].price,
					image: productsMock[2].image,
				},
				qty: 1,
			},
		]);

		act(() => result.current.removeFromCart(productsMock[2].id));
		expect(getCartArray(result.current.productsInCartMap)).toEqual([]);
	});

	it("should clear the cart after checkout", () => {
		const { result } = renderHook(useCart);
		expect(result.current.productsInCart).toEqual(undefined);

		act(() => result.current.addToCart(productsMock[1]));
		act(() => result.current.addToCart(productsMock[2]));
		act(() => result.current.addToCart(productsMock[1]));

		expect(result.current.productsInCart?.length).not.toEqual(0);

		act(() => result.current.checkout());
		expect(result.current.productsInCart?.length).toEqual(undefined);
	});

	it("should return the correct amount of total price", () => {
		const { result } = renderHook(useCart);
		expect(result.current.productsInCart).toEqual(undefined);

		act(() => result.current.addToCart(productsMock[1]));
		act(() => result.current.addToCart(productsMock[2]));
		act(() => result.current.addToCart(productsMock[1]));

		expect(result.current.totalPrice).toEqual(
			productsMock[1].price * 2 + productsMock[2].price,
		);
	});
});
