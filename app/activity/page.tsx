"use client"

import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import withAuth from "@/hoc/withAuth"

 function Page() {
  const purchasedTickets = useSelector((state: RootState) => state.tickets.purchasedTickets)

  return (
    <div className="flex flex-col p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Activity</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2 px-3">ID</th>
            <th className="text-left py-2 px-3">Movie</th>
            <th className="text-left py-2 px-3">Tickets</th>
            <th className="text-left py-2 px-3">Amount</th>
            <th className="text-left py-2 px-3">Time</th>
            <th className="text-left py-2 px-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {purchasedTickets.map((ticket, index) => {
            const rowId = String(index + 1).padStart(2, "0")
            return (
              <tr key={index} className="border-b">
                <td className="py-2 px-3">{rowId}</td>
                <td className="py-2 px-3">{ticket.name}</td>
                <td className="py-2 px-3">{ticket.tickets}</td>
                <td className="py-2 px-3">${ticket.amount.toFixed(2)}</td>
                <td className="py-2 px-3">{ticket.time}</td>
                <td className="py-2 px-3">{ticket.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default withAuth(Page);
