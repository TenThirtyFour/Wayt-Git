"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Update form schema to include a date field
const formSchema = z.object({
  eventname: z.string().min(2).max(50),
  venuename: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  phonenumber: z.string().min(2).max(50),
  venueaddress: z.string().min(2).max(50),
  eventdate: z.date().optional(),  // Added date field
});

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>();

  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventname: "",
      venuename: "",
      email: "",
      phonenumber: "",
      venueaddress: "",
      eventdate: undefined,  // Default value for date
    },
  });

  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-700">Submit an Event</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="eventname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Event Name:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name of the event"
                      {...field}
                      className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="venuename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Venue Name:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name of the venue"
                      {...field}
                      className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Email:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your email address"
                      {...field}
                      className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Phone Number:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your phone number"
                      {...field}
                      className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="venueaddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Venue Address:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Address of the venue"
                      {...field}
                      className="border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Event Date:</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          field.onChange(selectedDate);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
