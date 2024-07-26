// src/app/individula-event/[eventId].tsx
import * as React from "react";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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

export default function EventDetails() {
  const router = useRouter();
  const { eventId } = router.query;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (eventId) {
      fetch(`/events.json`) // Fetching from your events.json file
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const eventData = data.find((event: Event) => event._id === eventId);
          setEvent(eventData);
        })
        .catch((error) => console.error('Error fetching event data:', error));
    }
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50">
      <Card className="w-full max-w-2xl shadow-md rounded-md overflow-hidden m-2">
        <CardHeader className="p-4 border-b">
          <CardTitle className="text-2xl font-semibold">{event.eventName}</CardTitle>
          <CardDescription className="text-lg text-gray-500 cursor-pointer">
            {event.venueName}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <Image
            src={event.imageUrl}
            alt={event.eventName}
            width={500}
            height={280}
            layout="responsive"
            objectFit="cover"
            className="rounded-md mb-4"
          />
          <div className="mb-4">
            <Label htmlFor="location" className="font-medium text-lg">Location</Label>
            <p id="location" className="text-gray-600 text-base">{event.location}</p>
          </div>
          <div className="flex justify-between mb-4 space-x-4">
            <div className="flex flex-col">
              <Label htmlFor="eventDate" className="font-medium text-lg">Date</Label>
              <p id="eventDate" className="text-gray-600 text-base">{new Date(event.eventDate).toLocaleDateString()}</p>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="eventTime" className="font-medium text-lg">Time</Label>
              <p id="eventTime" className="text-gray-600 text-base">{event.eventTime}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" className="text-base" onClick={() => router.back()}>Back</Button>
            <Button className="text-base">Buy Tickets</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
