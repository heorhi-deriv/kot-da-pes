import { IS_SERVER } from '@/config/constants';

export async function initializeMocks() {
    if (IS_SERVER) {
        const { server } = await import('./server');
        await server.listen({ onUnhandledRequest: 'bypass' });
    } else {
        const { worker } = await import('./browser');
        await worker.start({ onUnhandledRequest: 'bypass' });
    }
}

export const makeApiRequest = async (path: string) => {
    try {
        const resp = await fetch(path);
        if (resp.ok) {
            const result = await resp.json();
            return result;
        }
    } catch (err: any) {
        // handle errors
    }
};
