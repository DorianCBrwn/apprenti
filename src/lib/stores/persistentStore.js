import { writable } from 'svelte/store';
import { browser } from '$app/environment';

/** @param {string} key */

export const useStorage = (key, defaultColumn) => {
	const defaultValue = defaultColumn;
	const data = browser ? localStorage.getItem(key) ?? defaultValue : defaultValue;

	const store = writable(data, () => {
		console.log('got a subscriber');
		const unsubscribe = store.subscribe((value) => {
			if (browser) {
				try {
					localStorage.setItem(key, JSON.stringify(value));
				} catch (error) {
					console.log('Error in local storage', error);
				}
			}
		});
		console.log('no more subscribers');
		return unsubscribe;
	});
	return store;
};
