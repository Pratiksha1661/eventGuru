import React from 'react'
import Link from 'next/link'

const Contact = () => {
    return (
        <section className="md:my-10 my-9 lg:mx-40 mx-10">
            <h3 className='text-3xl'>Developed by</h3>
            <h5 className='text-lg mt-2 text-gray-600'>
                <Link href='https://www.linkedin.com/in/arya-danech' target='_blank'>Arya Danech</Link>
            </h5>
        </section>
    )
}

export default Contact