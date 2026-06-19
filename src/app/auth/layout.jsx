import NavBar from "@/components/shared/NavBar";

export default function AuthLayout({ children }) {
    return (
        <div className="h-screen">
            {children}
        </div>
    );
};