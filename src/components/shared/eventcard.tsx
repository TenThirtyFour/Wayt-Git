'use client'

import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';  // Ensure the import path is correct

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

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const router = useRouter();

  const handleCategoryClick = () => {
    router.push(`/category/${event.category}`);
  };

  const handleLocationClick = () => {
    router.push(`/location/${event.location}`);
  };

  const handleVenueClick = () => {
    router.push(`/venue/${event.venueName}`);
  };

  return (
    <Card className="w-full shadow-md rounded-md overflow-hidden m-2">
      <CardHeader className="p-3 border-b">
        <CardTitle className="text-lg font-semibold">{event.eventName}</CardTitle>
        <CardDescription 
          className="text-sm text-gray-500 cursor-pointer"
          onClick={handleVenueClick}
        >
          {event.venueName}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Image
          src={event.imageUrl}
          alt={event.eventName}
          width={250}
          height={140}
          layout="responsive"
          objectFit="cover"
          className="rounded-md mb-3"
        />
        <div className="mb-3 flex justify-between items-center">
          <div>
            <Label htmlFor="location" className="font-medium text-sm">Location</Label>
            <p 
              id="location" 
              className="text-gray-600 text-xs cursor-pointer"
              onClick={handleLocationClick}
            >
              {event.location}
            </p>
          </div>
          <Badge variant="destructive" className="text-xs cursor-pointer" onClick={handleCategoryClick}>
            {event.category}
          </Badge>
        </div>
        <div className="flex justify-between mb-3 space-x-4">
          <div className="flex flex-col">
            <Label htmlFor="eventDate" className="font-medium text-sm">Date</Label>
            <p id="eventDate" className="text-gray-600 text-xs">{new Date(event.eventDate).toLocaleDateString()}</p>
          </div>
          <div className="flex flex-col">
            <Label htmlFor="eventTime" className="font-medium text-sm">Time</Label>
            <p id="eventTime" className="text-gray-600 text-xs">{event.eventTime}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-3 border-t">
        <Button variant="outline" className="text-xs">Details</Button>
        <Button className="text-xs">Buy Tickets</Button>
      </CardFooter>
    </Card>
  );
}
