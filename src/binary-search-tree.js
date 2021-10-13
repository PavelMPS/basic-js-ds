const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

module.exports = class BinarySearchTree {
  constructor(){
    this.rootNode=null;
  }


  root() {
    return this.rootNode;
  }

  add(data) {
    let dataNode= new Node(data);
    if(this.rootNode===null){
      this.rootNode=dataNode;
    }else{
      this.addNode(this.rootNode,dataNode)
    }
  }
  addNode(node, dataNode){
    if(dataNode.data<node.data){
      if(node.left===null){
         node.left=dataNode;
      }else{
        this.addNode(node.left, dataNode);
      }
    }else if(node.right===null){
      node.right=dataNode;
    }else{
      this.addNode(node.right, dataNode);
    }
  }

  has(data){
    if(this.rootNode===null){
      return false;
    } else return this.hasNode(this.rootNode, data);   
  }
  hasNode(node, data){
    if(node===null){
      return false;
    }
    if(data<node.data){
      return this.hasNode(node.left, data);
    }else if(data>node.data){
      return this.hasNode(node.right, data);
    } else return true;
  }
    

  find(data) {
    if(this.rootNode===null){
      return null;
    }else return this.findNode(this.rootNode, data);
  }
  findNode(node, data){
    if(node===null){
      return null;
    }else if(data<node.data){
      return this.findNode(node.left, data);
    }else if(data>node.data){
      return this.findNode(node.right, data);
    }else return node;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }
  removeNode(node, data){
    if(node===null){
      return false;
    }else if(node.data>data){
      node.left=this.removeNode(node.left, data);
    }else if(node.data<data){
      node.right=this.removeNode(node.right, data);
    }else if(node.left===null&&node.right===null){
            node=null;
          }
          if(node.left===null){
            node=node.right;
          }
          if(node.right===null){
            node=node.left;
          }
          let dataNode = this.minNode(node.right);
          node.data=dataNode.data;
          node.right=this.removeNode(node.right, dataNode.data);
  }

  min() {
    if(this.rootNode===null){
      return null;
    }else if(this.rootNode.left===null){
      return this.rootNode;
    }else return this.minNode(this.rootNode);
  }
  minNode(node){
    if(node.left===null){
      return node.data;
    }else return this.minNode(node.left);
  }

  max() {
    if(this.rootNode===null){
      return null;
    }else if(this.rootNode.right===null){
      return this.rootNode;
    }else return this.maxNode(this.rootNode);
  }
  maxNode(node){
    if(node.right===null){
      return node.data;
    }else return this.maxNode(node.right);
  }

}


class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;		
}
}

 