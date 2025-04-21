'use client';

import { FetchError } from "@/components/ui/FetchError";

export default function Error({
    error
}: {
    error: Error & { digest?: string };
    reset: VoidFunction;
}) {
    return (
        <FetchError
            message={error.message || 'Something went wrong!'}
        />
    );
}
