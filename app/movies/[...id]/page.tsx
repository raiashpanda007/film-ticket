"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { buyTicket } from "@/store/ticketslice";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import withAuth from "@/hoc/withAuth";


 function Page() {
  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const movie = movies.find((m) => m.id === Number(id));

  const [ticketCount, setTicketCount] = useState<number>(0);
  const [showTime, setShowTime] = useState<string>("9:00");
  const [date, setDate] = useState<string>("2025-02-11");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!movie) return;

    const ticketPrice = 25;
    dispatch(
      buyTicket({
        id: movie.id,
        name: movie.name,
        tickets: ticketCount,
        amount: ticketPrice * ticketCount,
        time: showTime,
        date: date,
      })
    );
    toast.toast({
        title: "Ticket booked successfully!",
        description: "success",
    });

    router.refresh();
  };

  if (!movie) {
    return <div>No movie found.</div>;
  }

  return (
    <div className="h-full w-full flex flex-col gap-6 p-4">
      <img
        src={movie.img}
        alt={movie.name}
        className="w-full h-96  rounded-lg shadow-2xl"
      />

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{movie.name}</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-3">
              <Label>Ticket Count</Label>
              <Button
                type="button"
                variant="outline"
                onClick={() => setTicketCount((prev) => Math.max(prev - 1, 1))}
              >
                -
              </Button>
              <div className="px-4 py-2 bg-black text-white rounded-md">
                {ticketCount}
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => setTicketCount((prev) => prev + 1)}
              >
                +
              </Button>
            </div>

            <div>
              <Label className="mb-2 block">Show Time</Label>
              <RadioGroup
                defaultValue={showTime}
                onValueChange={setShowTime}
                className="flex items-center gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="9:00" id="time-9" />
                  <Label htmlFor="time-9">9:00</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="12:00" id="time-12" />
                  <Label htmlFor="time-12">12:00</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="18:00" id="time-18" />
                  <Label htmlFor="time-18">18:00</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="mb-2 block">Date</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <Button type="submit" variant="default" className="rounded-md">
              Book Ticket
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default withAuth(Page);