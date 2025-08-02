export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            My Internal common Auth header
            <div>
                {children}
            </div>

        </div>
    )
}
