import { List } from './list';
import {GetRandomIdService} from '../services/get-random-id.service';

export const LISTS: List[] = [
  {
    id: GetRandomIdService.getID(),
    text: 'Buy presents',
    isDone: false,
  },
  {
    id: GetRandomIdService.getID(),
    text: 'To decorate a Christmas tree',
    isDone: false,
  },
];
