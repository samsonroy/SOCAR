import * as actions from '../../redux/actions/actions';

export function settingsData(state = {}, action) {
  switch (action.type) {
    case actions.getConfigData:
      return {
        ...state,
        userObject: action.data,
        configStatus: 'Success',
      };

    case actions.getConfigDataFail:
      return {
        ...state,
        userObject: null,
        configStatus: 'Failed',
      };
    case actions.fetchConfigDataStarted:
      return {
        ...state,
        configStatus: 'inProgress',
      };

    case actions.getUpdatedData:
      return {
        ...state,
        updateStatus: 'Success',
      };

    case actions.getUpdatedDataFail:
      return {
        ...state,
        updateStatus: 'Failed',
      };
    case actions.fetchUpdatedDataStarted:
      return {
        ...state,
        updateStatus: 'inProgress',
      };

    default:
      return state;
  }
}
