import { UserSettings } from '@graphql/models';

export const mockUserSettings: UserSettings[] = [
  {
    userId: 1,
    receiveNotifications: true,
    receiveEmails: true,
  },
  {
    userId: 2,
    receiveNotifications: false,
    receiveEmails: false,
  },
  {
    userId: 5,
    receiveNotifications: true,
    receiveEmails: false,
  },
];
