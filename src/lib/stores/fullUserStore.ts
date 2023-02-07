import { writable } from 'svelte/store';

export const fullUserStore = writable<{ group?: number; role?: 'admin' }>();
