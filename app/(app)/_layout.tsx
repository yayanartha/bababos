import { Stack } from "expo-router";

export default function AppLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="login"
				options={{ presentation: "modal", animation: "slide_from_bottom" }}
			/>
		</Stack>
	);
}
