class MiArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(i) {
        return this.data[i]
    }

    push(value) {
        this.data[this.length] = value
        this.length++
        return this.length
    }

    pop() {
        let i = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return i
    }

}