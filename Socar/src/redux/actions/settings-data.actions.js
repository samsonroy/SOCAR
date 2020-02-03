import * as actions from './actions';
import {recentPostsRef, updateBookingStatusService} from '@services/car';
import {firebaseDatabase} from '@config/firebase';

function configSuccess(data) {
  return {
    type: actions.getConfigData,
    data,
  };
}

function configInProgress() {
  return {
    type: actions.fetchConfigDataStarted,
    data: 'fetchConfigDataStarted',
  };
}

function configFailed() {
  return {
    type: actions.getConfigDataFail,
  };
}

export function requestAppConfig() {
  return function(dispatch, getState) {
    dispatch(configInProgress());
    recentPostsRef.once('value').then(
      sanpshot => {
        dispatch(configSuccess({data: sanpshot.val()}));
      },
      err => {
        console.log('Errror' + err);
        dispatch(configFailed());
      },
    );
  };
}

function updateSuccess() {
  return {
    type: actions.getUpdatedData,
  };
}

function updateInProgress() {
  return {
    type: actions.fetchUpdatedDataStarted,
    data: 'fetchConfigDataStarted',
  };
}

function updateFailed() {
  return {
    type: actions.getUpdatedDataFail,
  };
}

export function updateBookingStatus(id, status) {
  return function(dispatch, getState) {
    dispatch(updateInProgress());
    firebaseDatabase
      .ref('/cars/' + id)
      .update({status: status})
      .then(
        sanpshot => {
          requestAppConfig();
          // console.log('SNNNNNNNN', sanpshot);
          dispatch(updateSuccess());
        },
        err => {
          console.log('Errror' + err);
          dispatch(updateFailed());
        },
      );
  };
}
