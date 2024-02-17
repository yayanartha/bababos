import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="(home)"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Feather name="home" color={color} size={20} />
					),
					tabBarLabelStyle: {
						fontFamily: "Gabarito-SemiBold",
						fontSize: 12,
					},
					tabBarItemStyle: {
						gap: -12,
					},
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<Feather name="user" color={color} size={20} />
					),
					tabBarLabelStyle: {
						fontFamily: "Gabarito-SemiBold",
						fontSize: 12,
					},
					tabBarItemStyle: {
						gap: -12,
					},
				}}
			/>
		</Tabs>
	);
}
