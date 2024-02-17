import { z } from "zod";

const productSchema = z.object({
	id: z.number(),
	title: z.string(),
	price: z.number(),
	description: z.string(),
	category: z.string(),
	image: z.string(),
	rating: z.object({ rate: z.number(), count: z.number() }),
});
export type Product = z.infer<typeof productSchema>;

const productDetailSchema = z.object({
	id: z.number(),
	title: z.string(),
	price: z.number(),
	description: z.string(),
	category: z.string(),
	image: z.string(),
	rating_rate: z.number(),
	rating_count: z.number(),
});
export type ProductDetail = z.infer<typeof productDetailSchema>;
