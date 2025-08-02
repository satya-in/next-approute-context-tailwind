"use client"
export default function Error({ error }: { error: Error }) {
    return (
        <div className="text-center text-red-600 mt-20">
            <h1 className="text-2xl">Something went wrong</h1>
            <p>{error.message}</p>
        </div>)
}