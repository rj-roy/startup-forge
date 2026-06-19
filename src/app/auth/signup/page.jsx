import SignupComponent from "@/components/auth/SignUpComponent";
import { Suspense } from "react";

export const metadata = {
    title: "Sign Up | Startup Forge",
    description: "Sign Up to Startup Forge",
};

const SignUpPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <SignupComponent/>
            </Suspense>
        </div>
    );
};

export default SignUpPage;