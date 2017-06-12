import { observable, action } from 'mobx'

class Counter {
  @observable count = 0
  @action
  increment = () => {
    this.count++
  }

  @action
  decrement = () => {
    this.count--
  }
}

export default new Counter()
