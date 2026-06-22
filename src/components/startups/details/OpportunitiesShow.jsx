import OpList from '@/components/pages/opportunities/OpList';
import { ShoppingBag } from 'lucide-react';

const OpportunitiesShow = ({ opportunities }) => {
    return (
        <section id='opportunities' className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <ShoppingBag />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Oportunities
                </h2>
            </div>

            <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {
                    opportunities.data.length === 0 ? "No Opportunities Found" : 
                    <div>
                        <OpList opportunities={opportunities.data} />
                    </div>
                }
            </div>
        </section>
    );
};

export default OpportunitiesShow;