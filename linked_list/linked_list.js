/** функция конструктор LinkedList */
function LinkedList() {
  this.head = null;
  this.tail = null;
}
/** функция конструктор Node */
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

/** this - контекст в котором вызван метод
 * данные объекты созданные через эту функцию конструктор, будут использовать свой instance,
 * т.е. this это instance каждого объекта в частности
 */

/** Через prototype мы имеем доступ к instance LinkedList и можем добавлять
 * общие функции/свойства объектам, созданным через этот конструктор
 * */
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  /** если есть голова, то ее предыдущий объект = newNode */
  /** если нет , то хвост newNode, что бы просто заполнить структуру */
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  /** и в любом случае добавляем в голову */
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  /** если есть хвост, то ее следующий объект = newNode */
  /** если нет , то голова newNode, что бы просто заполнить структуру */
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  /** и в любом случае добавляем в хвост */
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  /** используем буфер для хранения значения */
  var val = this.head.value;
  /** ставим на место головы след элемент */
  this.head = this.head.next;
  /** если он существует, то зануляем ему ссылку на предыдущий объект */
  if (this.head) this.head.prev = null;
  /** если нет, то занляем, тк 2 эл-та */ else this.tail = null;
  //return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  /** используем буфер для хранения значения */
  var val = this.tail.value;
  /** ставим на место хвоста предыдущий элемент */
  this.tail = this.tail.prev;
  /** если он существует, то зануляем ссылку на следующий объект */
  if (this.tail) this.tail.next = null;
  /** если нет, то занляем, тк 2 эл-та */ else this.head = null;
  //return val;
};

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};

var myLL = new LinkedList();

// myLL.addToHead(123);
// myLL.addToTail(33);
// myLL.removeHead();
// myLL.addToHead('bar');
// myLL.addToTail('foo');
// myLL.addToHead(33);
// console.log(myLL.search('bar'));
// console.log(myLL.indexOf(33));
