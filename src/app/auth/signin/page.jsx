import SignInComponent from "@/components/auth/SignInComponent";
import { Suspense } from "react";

export const metadata = {
    title: "Sign In | Startup Forge",
    description: "Sign In to your account",
};

export default function SignInPage() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <SignInComponent />
            </Suspense>
        </div>
    );
}