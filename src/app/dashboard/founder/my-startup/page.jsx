import StartupCard from '@/components/startups/StartUpCard';
import { getDataById, } from '@/lib/api/getData';
import { getUserSession } from '@/lib/core/session';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const MyStartUp = async () => {
    const session = await getUserSession();
    const userId = session?.user?.id;
    
    // getStartupByFounderId
    const startup = await getDataById(userId, '/api/startups/founder');

    if (!session) {
        redirect("/auth/signin");
    };

    if (!startup) {
        redirect('/dashboard/founder/create-startup');
    }
    return (
        <div>
            <div className='flex justify-between mb-5'>
                <h1 className='text-2xl font font-medium'>My Startup</h1>
                <Link href={'/dashboard/founder/manage-startup'}
                    className='text-sm font-medium text-[#0d6efd]'>
                    Edit
                </Link>
            </div>
            <StartupCard startup={startup} />
        </div>
    );
};

export default MyStartUp;