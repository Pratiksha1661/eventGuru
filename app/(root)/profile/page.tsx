import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { getOrdersByUser } from '@/lib/actions/order.actions'
import { IOrder } from '@/lib/database/models/order.model'
import { SearchParamProps } from '@/types'
import { auth } from "@clerk/nextjs/server";
import Link from 'next/link'
import React from 'react'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const ordersPage = Number(searchParams?.ordersPage) || 1;
    const eventsPage = Number(searchParams?.eventsPage) || 1;

    const orders = await getOrdersByUser({ userId, page: ordersPage })

    const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
    const organizedEvents = await getEventsByUser({ userId, page: eventsPage })

    return (
        <>
            {/* My Tickets */}
            <section className="md:my-10 my-9 lg:mx-40 mx-10">
                <div className="flex items-center justify-center sm:justify-between">
                    <h3 className='text-center md:text-left text-3xl font-semibold'>My Tickets</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/#events">
                            Explore More Events
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="md:my-10 my-9 lg:mx-40 mx-10">
                <Collection
                    data={orderedEvents}
                    emptyTitle="No event tickets purchased yet"
                    emptyStateSubtext="No worries - plenty of exciting events to explore!"
                    collectionType="My_Tickets"
                    limit={3}
                    page={ordersPage}
                    urlParamName="ordersPage"
                    totalPages={orders?.totalPages}
                />
            </section>

            <Separator />

            {/* Events Organized */}
            <section className="md:my-10 my-9 lg:mx-40 mx-10">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='text-center sm:text-left text-3xl font-semibold'>Events Organized</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/events/create">
                            Create New Event
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="md:my-10 my-9 lg:mx-40 mx-10">
                <Collection
                    data={organizedEvents?.data}
                    emptyTitle="No events have been created yet"
                    emptyStateSubtext="Go create some now"
                    collectionType="Events_Organized"
                    limit={3}
                    page={eventsPage}
                    urlParamName="eventsPage"
                    totalPages={organizedEvents?.totalPages}
                />
            </section>
        </>
    )
}

export default ProfilePage