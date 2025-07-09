'use client';

import { useEffect } from "react";

const EMBEDDED_ORIGIN = 'https://secure.dev.channelpayments-app.com';
const EMBEDDED_EXAMPLE_URL = '/method-entry';
const EMBEDDED_SESSION_TOKEN = '/a9c217f6-40ab-4e78-b28f-6e6660674115.e4e820eb-a7a6-4718-a159-b803fac8cca0.fc2813d0d44ca2b0257c6f22c3183f8c85a29febff166b4facb80892f19efca7';


export const EmbeddedExample = () => {
    const handler = (event: MessageEvent) => {
        if (event.origin !== EMBEDDED_ORIGIN) return;
        console.log(event.data);
    };
    useEffect(() => {
        window.addEventListener('message', handler);
        return () => {
            window.removeEventListener('message', handler);
        };
    }, []);

    return (
        <main>
            <h1>Embedding Test Page</h1>
            <p>This is a test page for embedding components.</p>
            <iframe
                src={`${EMBEDDED_ORIGIN}${EMBEDDED_EXAMPLE_URL}${EMBEDDED_SESSION_TOKEN}`}
                title="Embedded Content"
                className="w-full h-[680px] border-none rounded-sm"
            />
        </main>
    );
};
