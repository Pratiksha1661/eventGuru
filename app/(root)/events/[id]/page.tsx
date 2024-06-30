import { getEvent } from '@/lib/actions/event.actions'
import { SearchParamProps } from '@/types'
import Image from 'next/image';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { formatDateTime } from '@/lib/utils'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
    const event = await getEvent(id);

    return (
        <>
            <section className='md:my-5 my-0 lg:px-40 px-0'>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className=''>
                        <Image
                            src={event.imageUrl}
                            alt={event.title}
                            width={1400}
                            height={1200}
                            className='md:min-h-[350px] md:min-w-[550px] object-cover md:rounded-lg object-center'
                        />
                    </div>
                    <div className='px-10 md:px-0 md:mt-4 flex flex-col gap-5'>
                        <div>
                            <h3 className='text-3xl md:text-4xl font-bold tracking-wide'>{event.title}</h3>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span className='bg-primary-foreground px-3 py-2 rounded-md font-bold'>{event.category.name}</span>
                            <span className='text-green-700 bg-green-100 px-4 py-2 rounded-md font-bold'>{event.isFree ? 'Free' : `Price: ${event.price}`}</span>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FaRegCalendarCheck className='text-primary' size={22} />
                            <div className='flex flex-col '>
                                <span>
                                    {formatDateTime(event.startDateTime).dateOnly} - {' '}
                                    {formatDateTime(event.startDateTime).timeOnly}
                                </span>
                                <span>
                                    {formatDateTime(event.endDateTime).dateOnly} - {' '}
                                    {formatDateTime(event.endDateTime).timeOnly}
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FaLocationDot className='text-primary' size={22} />
                            <span>{event.location}</span>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FaCircleUser className='text-primary' size={23} />
                            <span>Organized by:
                                <span className='font-bold ml-1 text-accent'>
                                    {event.organizer.firstName} {event.organizer.lastName}
                                </span>
                            </span>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FaLink className='text-primary' size={22} />
                            <span>
                                <Link href={event.url} target='_blank'>
                                    <p className='text-accent underline underline-offset-2'>{event.url}</p>
                                </Link>
                            </span>
                        </div>
                        <div>
                            <Button>
                                Resevere your spot
                            </Button>
                        </div>
                    </div>
                </div>
                <Separator className='my-5' />
                <div className='flex flex-col gap-2 my-3 mx-10 md:mx-0'>
                    <h5 className='font-semibold text-lg'>About this Event</h5>
                    <p>{event.description}</p>
                </div>
            </section>
        </>
    )
}

export default EventDetails