class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        let newNode = new Node(value)
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }

    printList() {
        let aux = this.head;
        if (this.head === null) return "Empty"
        while (aux) {
            console.log(aux.value)
            aux = aux.next
        }
    }

    reverse() {
        let prev = null
        while (this.head) {
            let nextNode = this.head.next
            this.head.next = prev
            prev = this.head
            this.head = nextNode
        }
        return prev
    }

    arrToList(arr) {
        for (let i = 0; i < arr.length; i++) {
            let newNode = new Node(arr[i])
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
                this.length++
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++
            }
        }
    }

}