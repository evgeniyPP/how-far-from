export interface City {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface DistanceAPIResponse {
  distance: number;
  unit: 'kilometers';
}

export interface NotificationData {
  title?: string;
  text?: string;
  status?: NotificationStatus;
}

export type NotificationStatus = 'success' | 'info' | 'error';
