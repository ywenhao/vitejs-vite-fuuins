import { makeAutoObservable } from 'mobx';

const counterStore = makeAutoObservable({
  count: 0,
  add() {
    counterStore.count++;
  },
});

export default counterStore;
