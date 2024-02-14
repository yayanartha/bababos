import { Link } from "expo-router";
import { Button, View } from "react-native";

export default function Profile() {
	return (
		<View>
			<Link href={"/login"} asChild>
				<Button title="Login" />
			</Link>
		</View>
	);
}
