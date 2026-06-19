import SDetailsC from "@/components/startups/details/SDetailsC";

export const metadata = {
    description: "Startup Details",
    title: "Startup Details | Startup Forge",
};

export default async function StartupPage({params}) {
    const {id} = await params;
    console.log(id);

    return <SDetailsC id={id} />;
}