import {
	PropsWithChildren,
	createContext,
	useCallback,
	useContext,
	useMemo,
} from "react";

interface AuthContextType {
	signIn(): void;
	signOut(): void;
}

const AuthContext = createContext<AuthContextType>({
	signIn: () => null,
	signOut: () => null,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const signIn = useCallback(() => {
		//
	}, []);

	const signOut = useCallback(() => {
		//
	}, []);

	const providerValues = useMemo(
		() => ({
			signIn,
			signOut,
		}),
		[signIn, signOut],
	);

	return (
		<AuthContext.Provider value={providerValues}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be wrapped in a <AuthProvider />");
	}

	return context;
};
