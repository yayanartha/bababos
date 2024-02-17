import { Slot, SplashScreen } from "expo-router";
import AppProvider from "../providers";
import { useFonts } from "expo-font";
import "../global.css";
import { useEffect } from "react";
import { configureNumeral } from "@/utils/configure-numeral";

SplashScreen.preventAutoHideAsync();

// configureNumeral();

export default function RootLayout() {
	const [fontsLoaded, fontError] = useFonts({
		"Gabarito-Regular": require("../assets/fonts/Gabarito-Regular.ttf"),
		"Gabarito-SemiBold": require("../assets/fonts/Gabarito-SemiBold.ttf"),
	});

	useEffect(() => {
		if (fontsLoaded || fontError) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<AppProvider>
			<Slot />
		</AppProvider>
	);
}
