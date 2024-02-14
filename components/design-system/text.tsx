import { Text as RNText, TextProps } from "react-native";

const Text = ({ className, style, ...props }: TextProps) => {
	return (
		<RNText
			className={`text-black ${className}`}
			style={[{ fontFamily: "Gabarito-Regular" }, style]}
			{...props}
		/>
	);
};

const TextH1 = ({ className, style, ...props }: TextProps) => {
	return (
		<Text
			className={`text-xl ${className}`}
			style={[{ fontFamily: "Gabarito-SemiBold" }, style]}
			{...props}
		/>
	);
};

const TextButton = ({ className, style, ...props }: TextProps) => {
	return (
		<Text
			className={`text-lg leading-tight ${className}`}
			style={[{ fontFamily: "Gabarito-SemiBold" }, style]}
			{...props}
		/>
	);
};

const TextTitle = ({ className, style, ...props }: TextProps) => {
	return (
		<Text
			className={`text-base leading-tight ${className}`}
			style={[{ fontFamily: "Gabarito-SemiBold" }, style]}
			{...props}
		/>
	);
};

const TextLabel = ({ className, ...props }: TextProps) => {
	return <Text className={`text-gray-400 ${className}`} {...props} />;
};

Text.H1 = TextH1;
Text.Button = TextButton;
Text.Title = TextTitle;
Text.Label = TextLabel;

export default Text;
