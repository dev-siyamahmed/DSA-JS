// // উদাহরণ: সিঙ্গেল লিঙ্কড লিস্ট

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }

//     // নতুন নোড যোগ করা
//     append(value) {
//       const newNode = new Node(value);
//       if (!this.head) {
//         this.head = newNode;
//         return;
//       }

//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }

//     // লিঙ্কড লিস্ট প্রিন্ট করা
//     printList() {
//       let current = this.head;
//       let result = '';
//       while (current) {
//         result += current.value + ' -> ';
//         current = current.next;
//       }
//       console.log(result + 'null');
//     }
//   }

//   let list = new LinkedList();
//   list.append(1);
//   list.append(2);
//   list.append(3);
//   list.printList(); // আউটপুট: 1 -> 2 -> 3 -> null


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  isEmpty() {
    return this.length === 0
  }

  push(value) {
    let newNode = {
      value: value,
      next: null
    }

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
this.length ++
  }
}
let list = new LinkedList()
list.push(5)
list.push(10)
list.push(12)
list.push(15)
console.log(list.head.next);