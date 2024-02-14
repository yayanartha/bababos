import { MMKV, useMMKVString } from "react-native-mmkv";

export const authStorageKeys = {
	ACCESS_TOKEN: "access-token",
};

export const AuthStorage = new MMKV({
	id: "bababos-auth-storage",
	encryptionKey: "bababos-auth-encryption-key",
});

export const useAccessToken = () =>
	useMMKVString(authStorageKeys.ACCESS_TOKEN, AuthStorage);
