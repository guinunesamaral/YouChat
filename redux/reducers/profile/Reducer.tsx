import * as profileTypes from './Types';

const initialState = {
  photo: undefined,
};

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case profileTypes.updatePhoto:
      return {
        photo: action.payload.photo,
      };
    default:
      return state;
  }
};
