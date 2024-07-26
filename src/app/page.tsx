'use client';

import * as React from "react";
import { useEffect, useState } from "react";
import { EventCard } from "@/components/shared/eventcard";

interface Event {
  _id: string;
  eventName: string;
  venueName: string;
  eventDate: string;
  eventTime: string;
  imageUrl: string;
  location: string;
  category: string;
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('/events.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the data is an array of events
        setEvents(data.slice(0, 10)); // Get the first 10 events
      })
      .catch((error) => console.error('Error fetching event data:', error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50 dark:bg-gray-900">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl font-bold mb-6">Hello World</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </main>
  );
}
