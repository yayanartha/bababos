import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
	return (
		<View>
			<Link href={"/login"} asChild>
				<Button title="Login" />
			</Link>
		</View>
	);
}
