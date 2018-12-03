import { Task } from '../lists/list';
import {GetRandomIdService} from '../services/get-random-id.service';

export const TASKS: Task[] = [
  {
    id: GetRandomIdService.getID(),
    text: 'Buy presents',
    isDone: false,
    isEdit: false,
  },
  {
    id: GetRandomIdService.getID(),
    text: 'To decorate a Christmas tree',
    isDone: false,
    isEdit: false,
  },
];
