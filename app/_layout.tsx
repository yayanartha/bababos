import { Slot } from "expo-router";
import AppProvider from "../providers";

export default function RootLayout() {
	return (
		<AppProvider>
			<Slot />
		</AppProvider>
	);
}
