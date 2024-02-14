import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth-provider";

export default function AppProvider({ children }: PropsWithChildren) {
	return <AuthProvider>{children}</AuthProvider>;
}
