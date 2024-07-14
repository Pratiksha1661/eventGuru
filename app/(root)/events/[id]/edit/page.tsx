import React from "react";
import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";
import { getEventById } from "@/lib/actions/event.actions";

type EditEventProps = {
  params: {
    id: string
  }
}

const EditEvent = async ({ params: { id } }: EditEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id)

  return (
    <section className="md:my-10 my-9 lg:px-40 px-10">
      <div className="flex flex-col">
        <div id="create-event-form-heading" className="my-2">
          <h3 className="font-bold md:text-3xl text-2xl md:text-center ">
            Edit Event Details
          </h3>
        </div>
        <div id="create-event-form">
          <EventForm userId={userId} type="Edit" event={event} eventId={event._id} />
        </div>
      </div>
    </section>
  );
};

export default EditEvent;
