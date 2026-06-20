import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";
import { getStartupByFounderId } from "./lib/api/getData";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const isAlreadyCreatedStartup = await getStartupByFounderId(session?.user?.id);

    const pathname = request.nextUrl.pathname;

    if (session && ["/auth/signin", "/auth/signup"].includes(pathname)) {
        return NextResponse.redirect(new URL("/", request.url));
    };

    if (pathname.startsWith("/dashboard") && !session) {
        return NextResponse.redirect(
            new URL("/auth/signin", request.url)
        );
    };

    if (pathname.startsWith("/dashboard/admin") && session?.user?.role !== "admin") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
    };

    if (pathname.startsWith("/dashboard/founder") && session?.user?.role !== "founder") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
    };

    if (pathname.startsWith("/dashboard/collaborator") && session?.user?.role !== "collaborator") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
    };
    if (pathname.startsWith("/dashboard/founder/create-startup") && isAlreadyCreatedStartup) {
        return NextResponse.redirect(new URL("/dashboard/founder", request.url));
    };

    return NextResponse.next();
};

export const config = { matcher: [ "/auth/signin", "/auth/signup", "/dashboard/:path*", ], };