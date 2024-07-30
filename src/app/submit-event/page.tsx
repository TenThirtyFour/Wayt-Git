"use client"
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  eventname: z.string().min(2).max(50),
  venuename: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  phonenumber: z.string().min(2).max(50),
  venueaddress: z.string().min(2).max(50),
})

export default function Home() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventname: "",
      venuename: "",
      email: "",
      phonenumber: "",
      venueaddress: "",
    },
  })
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Submit an Event</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 rounded-lg shadow-md">
            <FormField
              control={form.control}
              name="eventname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of event..." {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="venuename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of the venue..." {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email address..." {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number:</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number..." {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="venueaddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue Address:</FormLabel>
                  <FormControl>
                    <Input placeholder="Address of the venue..." {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
