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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Card>
        <CardHeader>
          <CardTitle>Event Submission Form</CardTitle>
          <CardDescription>Please fill out the following form to submit a new event.</CardDescription>
        </CardHeader>
        <CardContent>
       
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="eventname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Name of event..." {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the name of the event.
                    </FormDescription>
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
                    <FormDescription>
                      Enter the name of the venue.
                    </FormDescription>
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
                    <FormDescription>
                      Enter your email address.
                    </FormDescription>
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
                    <FormDescription>
                      Enter your phone number.
                    </FormDescription>
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
                    <FormDescription>
                      Enter the address of the venue.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          </CardContent>
          
          </Card>
        
      </div>
    </main>
  );
}
