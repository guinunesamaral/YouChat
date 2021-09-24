import { users as usersDatabase } from '../../../shared/database/users.database';

const paulo = usersDatabase[13];

const initialState = {
  user: paulo,
};

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
