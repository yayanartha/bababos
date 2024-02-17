import { z } from "zod";
import { productCartSchema } from "./product-schema";

export const productInCartSchema = z.object({
	product: productCartSchema,
	qty: z.number(),
});
export type ProductInCart = z.infer<typeof productInCartSchema>;
