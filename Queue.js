class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value)
    if (this.length) {
      this.last.prev = newNode
      this.last = newNode
    } else {
      this.first = newNode
      this.last = newNode
    }
    this.length++
  }

  dequeue() {
    if (this.length) {
      let aux = this.first
      this.first = this.first.prev
      aux.prev = null
      this.length--
      return aux
    } else {
      return "Empty"
    }
  }

  peek() {
    return this.first.value
  }

  contains(value) {
    let aux = this.first
    while (aux) {
      if (aux.value === value) return true
      aux = aux.prev
    }
    return false
  }

}