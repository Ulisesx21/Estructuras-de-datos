class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value)
    if (this.top === null) {
      this.top = newNode
      this.bottom = newNode
    } else {
      newNode.prev = this.top
      this.top = newNode
    }
    this.length++
  }

  pop() {
    if (this.top === null) {
      return "Empty"
    } else {
      let aux = this.top
      this.top = this.top.prev
      aux.prev = null
      return aux
    }
  }

  peek() {
    return this.top.value
  }

  printList() {
    let aux = this.top
    while (aux) {
      console.log(aux.value)
      aux = aux.prev
    }
  }

  contains(value) {
    let aux = this.top
    while (aux) {
      if (aux.value === value) {
        return true
      }
      aux = aux.prev
    }
    return false
  }

}