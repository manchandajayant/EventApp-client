export interface EventsObject {
  name: string;
  description: string;
  url: string;
  startDate: string;
  id: number;
}

export interface EventObject {
  name: string;
  description: string;
  url: string;
  startDate: string;
  id: number;
  endDate: string;
  tickets: Array<any>;
}

export interface TicketObject {
  price: string;
  description: string;
  url: string;
}

export interface UserObject {
  auth: string;
  newUser: string;
  loggedInUser: number;
}
