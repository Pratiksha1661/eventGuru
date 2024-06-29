import React from "react";
import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <section className="md:my-10 my-9 lg:px-40 px-10">
      <div className="flex flex-col">
        <div id="create-event-form-heading" className="my-2">
          <h3 className="font-bold md:text-3xl text-2xl md:text-center ">
            Create Event
          </h3>
        </div>
        <div id="create-event-form" className="md:mx-44 my-3">
          <EventForm userId={userId} type="Create" />
        </div>
      </div>
    </section>
  );
};

export default CreateEvent;
