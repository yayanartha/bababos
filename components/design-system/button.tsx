import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "./text";

export const Button = ({
	className,
	children,
	...props
}: TouchableOpacityProps) => {
	return (
		<TouchableOpacity
			className={`h-10 rounded-2xl flex-row items-center justify-center px-4 ${className}`}
			{...props}
		>
			{children}
		</TouchableOpacity>
	);
};

const ButtonPrimary = ({
	className,
	children,
	...props
}: TouchableOpacityProps) => {
	if (typeof children === "string") {
		return (
			<Button className={`bg-blue ${className}`} {...props}>
				<Text.Button className="text-white">{children}</Text.Button>
			</Button>
		);
	}

	return (
		<Button className={`bg-blue ${className}`} {...props}>
			{children}
		</Button>
	);
};

Button.Primary = ButtonPrimary;

export default Button;
