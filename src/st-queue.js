const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
constructor(){
  this.head=null;
  this.tail=null;
  this.length=0;
}
  

  getUnderlyingList() {
    return this.head;
     }
  

  enqueue(value) {
   let newNode = new ListNode(value);
   if(this.length===0){
     this.head=newNode;
     this.tail=newNode;
   }else{
     this.tail=newNode;
     this.tail.next=newNode;
   }
   this.length++;
   return this;
  }

  dequeue() {
    let elem=this.head;
    if(elem.next!=null){
      this.head=null;
      this.length--
    }

    }
  

}
