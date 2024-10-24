export interface User {
  id: string;
  name: string;
  email: string;
  role: 'organizer' | 'ngo';
  organization: string;
}

export interface DonationOffer {
  id: string;
  eventName: string;
  organizerId: string;
  location: string;
  quantity: number;
  availableUntil: string;
  description: string;
  imageUrl: string; // Now required
  status: 'available' | 'claimed' | 'completed';
}


export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}