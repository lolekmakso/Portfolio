import { useState, useEffect } from 'react';

function getStorageValue<T>(key: string, defaultValue: T): T {
	// getting stored value
	const saved = localStorage.getItem(key);
	if (saved !== null) {
		try {
			return JSON.parse(saved);
		} catch {
			return defaultValue;
		}
	}
	return defaultValue;
}

export const useLocalStorage = <T,>(key: string, defaultValue: T) => {
	const [value, setValue] = useState<T>(() => getStorageValue<T>(key, defaultValue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as const;
};
