import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ConfirmDelete } from './ConfirmDelete'
import { FaMapPin, FaHeart, FaCalendar, FaIndianRupeeSign, FaPencil } from 'react-icons/fa6'
import { Button } from '../ui/button'

type CardProps = {
  event: IEvent,
  hasOrderLink?: boolean,
  hidePrice?: boolean
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="bg-white px-4 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex flex-col min-h-[530px] max-h-[700px] max-w-[400px] hover:-translate-y-2 relative">
      <div className='w-full mb-3'>
        <Link
          href={`/events/${event._id}`}
          className="bg-gray-50 bg-cover bg-center w-full"
        >
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={350}
            height={200}
            className='rounded-md my-2 w-full h-56 object-cover'
          />
        </Link>
      </div>
      {/* IS EVENT CREATOR ... */}

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all z-50">
          <Link href={`/events/${event._id}/edit`}>
            <FaPencil className="text-primary-500" />
          </Link>

          <ConfirmDelete eventId={event._id} />
        </div>
      )}

      <div className="flex flex-col gap-3 text-[15px] text-gray-400 mb-3">
        <div className="flex flex-col gap-2 flex-wrap">
          <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
              {!hidePrice && (
                <div className="flex gap-1 items-center">
                  <FaIndianRupeeSign size={20} className="text-gray-600" />
                  <p className={event.isFree ? `text-green-600 font-bold text-lg` : `text-red-700 font-bold text-lg`}>{event.isFree ? 'Free' : event.price}</p>
                </div>
              )}

              <div className='flex gap-1 items-center'>
                <FaCalendar className="text-primary-500" />
                <p className="text-grey-500">
                  {formatDateTime(event.startDateTime).dateTime}
                </p>
              </div>

              <div className='flex gap-1 items-center'>
                <FaMapPin className="text-primary-500" />
                <p className="text-grey-500">
                  {event.location}
                </p>
              </div>

              <div className='flex gap-1 items-center'>
                <span className="px-3 py-2 text-base text-black rounded-lg border-2 bg-gray-200">
                  {event.category.name}
                </span>
              </div>

            </div>
            <div className='flex justify-end'>
              <FaHeart size={20} className="text-primary-500 cursor-pointer" />
            </div>
          </div>

          <Link href={`/events/${event._id}`}>
            <h3 aria-label={event.title} className="text-2xl line-clamp-1 flex-1 text-black">{event.title}</h3>
          </Link>
          <div className="overflow-hidden">
            <p className="text-base text-muted-foreground line-clamp-2">
              {event.description}
            </p>
          </div>
        </div>
      </div>

      <div className='mt-auto ms-auto'>
        <Link href={`/events/${event._id}`}>
          <Button variant={"default"}>Know More</Button>
        </Link>
      </div>
    </div>
  )
}

export default Card