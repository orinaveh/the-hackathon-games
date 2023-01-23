import { auth } from '$lib/firebase';
import { goto } from '$app/navigation';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad<void> = ({ route: { id } }) => {
	const isLogin = id === '/login';
	auth.onAuthStateChanged((value) => {
		if (isLogin ? !!value : !value) {
			return goto(isLogin ? '/' : '/login');
		}
	});
};
