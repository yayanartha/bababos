import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth-provider";

export default function Providers({ children }: PropsWithChildren) {
	return <AuthProvider>{children}</AuthProvider>;
}
