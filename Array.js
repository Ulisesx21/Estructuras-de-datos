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

    unshift(value) {
        let a = {}
        a[0] = value
        for (let i = 1; i <= this.length; i++) {
            a[i] = this.data[i - 1]
        }
        this.data = a
        this.length++
        return this.length
    }

    shift() {
        let a = {}
        let i = this.data[0]
        for (let i = 0; i < this.length - 1; i++) {
            a[i] = this.data[i + 1]
        }
        this.data = a
        this.length--
        return i
    }

    reverse() {
        let a = []
        for (let i = this.length - 1; i >= 0; i--) {
            a.push(this.data[i])
        }
        return a
    }

    includes(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value) {
                return true
            }
        }
        return false
    }

}