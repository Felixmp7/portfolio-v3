'use client';

interface FetchErrorProps {
    message?: string;
}

export const FetchError = ({
    message = 'Something went wrong!'
}: FetchErrorProps) => (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="mb-4 text-2xl font-semibold">Something went wrong!</h2>
        <p className="mb-6 text-muted-foreground">
            {message}
        </p>
    </div>
);
