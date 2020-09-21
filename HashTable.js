class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keymap.length;
    }
    return total;
  }

  set(key, val) {
    let index = this._hash(key);
    this.keymap[index] = this.keymap[index] || [];
    this.keymap[index].push([key, val]);
  }

  get(key) {
    let index = this._hash(key);
    return this.keymap[index].find((el) => el[0] === key)[1] || undefined;
  }

  keys() {
    let arr = [];
    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        for (let j = 0; j < this.keymap[i].length; j++) {
          if (!arr.includes(this.keymap[i][j][0])) {
            arr.push(this.keymap[i][j][0]);
          }
        }
      }
    }
    return arr;
  }

  values() {
    let arr = [];
    for (let i = 0; i < this.keymap.length; i++) {
      if (this.keymap[i]) {
        for (let j = 0; j < this.keymap[i].length; j++) {
          if (!arr.includes(this.keymap[i][j][1])) {
            arr.push(this.keymap[i][j][1]);
          }
        }
      }
    }
    return arr;
  }
}
