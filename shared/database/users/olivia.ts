import { getUUID } from '../../functions.util';

export const olivia = {
  id: getUUID(),
  name: 'Olívia Santos',
  email: 'olivia@gmail.com',
  photo: require('../../../assets/users/olivia.jpg'),
  contacts: () => [],
  chatList: () => [],
};
