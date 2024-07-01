import Image from 'next/image'

import { FaMapPin } from 'react-icons/fa6'
import { FaCalendar } from 'react-icons/fa6'
import { FaIndianRupeeSign } from 'react-icons/fa6'

type CollectionCardProps = {
  title: string
  startDateTime: string
  endDateTime: string
  location: string
  category: string
  isFree: boolean
  imgUrl: string
}

const CollectionCard = ({ title, startDateTime, endDateTime, location, category, isFree, imgUrl }: CollectionCardProps) => {
  return (
    <div className='md:px-4 px-4 md:py-6 py-4 md:min-w-[300px] md:max-w-[350px] md:mt-5 rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out'>
      <div className='flex flex-col'>
        <div className='cursor-pointer'>
          <Image
            src={imgUrl}
            alt='Event Image'
            width={300}
            height={200}
            className='rounded-lg object-cover w-full'
          />
        </div>
        <div className='mt-3'>
          <h3 className='text-lg font-bold'>{title}</h3>
        </div>
        <div className='flex items-center mt-1'>
          <p className='text-sm text-gray-500 flex gap-1 items-center'>
            <FaCalendar className='mr-1' />
            {startDateTime} - {endDateTime}
          </p>
        </div>
        <div className='flex items-center mt-1'>
          <p className='text-sm text-gray-500 flex gap-1 items-center'>
            <FaMapPin className='mr-1' /> {location}
          </p>
        </div>
        <div className='mt-3'>
          <div className='flex gap-2'>
            <div className='px-5 py-2 text-sm bg-green-100 text-green-600 font-bold rounded-md flex items-center'>
              {/* <FaIndianRupeeSign className='mr-1' /> 200 */}
              {isFree ? 'Free' : `Paid`}
            </div>
            <div className='px-5 py-2 text-sm bg-slate-200 rounded-md font-bold text-accent'>
              {category}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard