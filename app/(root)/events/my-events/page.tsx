import Collection from '@/components/shared/Collection'
import { getAllEvents } from '@/lib/actions/event.actions'
import { SearchParamProps } from '@/types';
import React from 'react'

const MyEvents = async ({ searchParams }: SearchParamProps) => {
    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';
    const events = await getAllEvents({
        query: searchText,
        category,
        page,
        limit: 6
    })
    return (
        <section className="md:my-10 my-9 lg:mx-40 mx-10">
            <Collection
                data={events?.data}
                emptyTitle="No Events Found"
                emptyStateSubtext="Come back later"
                collectionType="Events_Organized"
                limit={6}
                page={page}
                totalPages={events?.totalPages}
            />
        </section>
    )
}

export default MyEvents