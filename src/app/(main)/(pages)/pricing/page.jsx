import PricingCom from "@/components/pages/pricing/PricingCom";
import { getPrDataByCollection } from "@/lib/api/getData";

export default async function PricingPage() {
    const plans = await getPrDataByCollection('/api/plan');
    return (
        <div className="bg-gray-50 dark:bg-black-bg py-8 px-4 sm:px-6 lg:px-8">
            <PricingCom plans={plans.data}/>
        </div>
    );
}