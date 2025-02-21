import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PurchasedTicket {
  id: number
  name: string
  tickets: number
  amount: number
  time: string
  date: string
}

interface TicketsState {
  purchasedTickets: PurchasedTicket[]
}

function loadFromLocalStorage(): PurchasedTicket[] {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("purchasedTickets")
    if (data) {
      return JSON.parse(data) as PurchasedTicket[]
    }
  }
  return []
}

function saveToLocalStorage(tickets: PurchasedTicket[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("purchasedTickets", JSON.stringify(tickets))
  }
}

const initialState: TicketsState = {
  purchasedTickets: loadFromLocalStorage(),
}

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    buyTicket: (
      state,
      action: PayloadAction<{
        id: number
        name: string
        tickets: number
        amount: number
        time: string
        date: string
      }>
    ) => {
      const { id, name, tickets, amount, time, date } = action.payload
      const existingTicket = state.purchasedTickets.find(
        (t) => t.id === id && t.time === time && t.date === date
      )
      if (existingTicket) {
        existingTicket.tickets += tickets
        existingTicket.amount += amount
      } else {
        state.purchasedTickets.push({ id, name, tickets, amount, time, date })
      }
      saveToLocalStorage(state.purchasedTickets)
    },
  },
})

export const { buyTicket } = ticketsSlice.actions
export default ticketsSlice.reducer
