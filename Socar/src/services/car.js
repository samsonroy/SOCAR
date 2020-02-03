import {firebaseDatabase} from '@config/firebase';

export const recentPostsRef = firebaseDatabase.ref('/cars');

export const updateBookingStatusService = id => {
  firebaseDatabase.ref('/cars' + id);
};
