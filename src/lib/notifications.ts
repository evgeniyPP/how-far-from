import type { NotificationData } from './models';

const notifications: Record<string, NotificationData> = {
  noCities: {
    title: 'No cities found',
    text: 'Try to change your query',
    status: 'info',
  },
  error: {
    title: 'Error occured',
    text: 'Try again later',
    status: 'error',
  },
};

export default notifications;
