class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.list = [];
  }

  //insert first node
  insert(data) {
    this.head = new Node(data, this.head);
  }

  //insert last node

  insertLastNode(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  printList() {
    let data = this.head;
    console.log(data, "data");
    while (data) {
      data = data.next;
      console.log(data, "current");
      this.list.push(data);
    }
  }
}
const l1 = new LinkedList();
// l1.insert(20);
l1.insert(30);

l1.insertLastNode(60);
l1.insert(50);
l1.printList();
console.log(l1);
Footer;
