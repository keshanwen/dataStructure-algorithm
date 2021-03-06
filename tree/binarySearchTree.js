// 二叉查找树类
function BinarySearchTree() {
    // 用于实例化节点的类
    var Node = function(key) {
        this.key = key; // 节点的健值
        this.left = null; // 指向左节点的指针
        this.right = null; // 指向右节点的指针
    };

    var root = null; // 将根节点置为 null

    this.insert = function(key) {
        var newNode = new Node(key); // 实例化一个节点
        if (root === null) {
            root = newNode; // 如果树为空，直接将该节点作为根节点
        } else {
            insertNode(root, newNode); // 插入节点（传入根节点作为参数）
        }
    };
    // 插入节点的函数
    var insertNode = function(node, newNode) {
        // 如果插入节点的键值小于当前节点的键值
        // （第一次执行 insertNode 函数时，当前节点就是根节点）
        if (newNode.key < node.key) {
            if (node.left === null) {
                // 如果当前节点的左子节点为空，就直接在该左子节点处插入
                node.left = newNode;
            } else {
                // 如果左子节点不为空，需要继续执行 insertNode 函数，
                // 将要插入的节点与左子节点的后代继续比较，直到找到能够插入的位置
                insertNode(node.left, newNode);
            }
        } else {
            // 如果插入节点的键值大于当前节点的键值
            // 处理过程类似，只是 insertNode 函数继续比较的是右子节点
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.min = function(node) {
        // min 方法允许传入子树
        node = node || root;
        // 一直遍历左侧子节点，直到底部
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };

    this.max = function(node) {
        // max 方法允许传入子树
        node = node || root;
        // 一直遍历左侧子节点，直到底部
        while (node && node.right !== null) {
            node = node.right;
        }
        return node;
    };

    this.search = function(key, node) {
        // 同样的，search 方法允许在子树中查找值
        node = node || root;
        return searchNode(key, node);
    };
    var searchNode = function(key, node) {
        // 如果 node 是 null，说明树中没有要查找的值，返回 false
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            // 如果要查找的值小于该节点，继续递归遍历其左侧节点
            return searchNode(key, node.left);
        } else if (key > node.key) {
            // 如果要查找的值大于该节点，继续递归遍历其右侧节点
            return searchNode(key, node.right);
        } else {
            // 如果要查找的值等于该节点，说明查找成功，返回改节点
            return node;
        }
    };

    this.remove = function(key, node) {
        // 同样的，允许仅在子树中删除节点
        node = node || root;
        return removeNode(key, node);
    };
    var self = this;
    var removeNode = function(key, node) {
        // console.log('node :', node);
        // 如果 node 不存在，直接返回
        if (node === null) {
            return false;
        }

        // 找到要删除的节点
        node = self.search(key, node);

        // 第一种情况，该节点没有子节点
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        // 第二种情况，该节点只有一个子节点的节点
        if (node.left === null) {
            // 只有右节点
            node = node.right;
            return node;
        } else if (node.right === null) {
            // 只有左节点
            node = node.left;
            return node;
        }
        // 第三种情况，有有两个子节点的节点
        // 将右侧子树中的最小值，替换到要删除的位置
        // 找到最小值
        var aux = self.min(node.right);
        // 替换
        node.key = aux.key;
        // 删除最小值
        // node.right = removeNode(aux.key, node.right);
        removeNode(aux.key, node.right);
        return node;
    };

    // 先序遍历
    this.preOrderTraverse = function(callback) {
        // 同样的，callback 用于对遍历到的节点做操作
        preOrderTraverseNode(root, callback);
    };
    var preOrderTraverseNode = function(node, callback) {
        // 遍历到 node 为 null 为止
        if (node !== null) {
            callback(node.key); // 先处理当前节点
            preOrderTraverseNode(node.left, callback); // 再继续遍历左子节点
            preOrderTraverseNode(node.right, callback); // 最后遍历右子节点
        }
    };

    // 中序遍历
    this.inOrderTraverse = function(callback) {
        // callback 用于对遍历到的节点做操作
        inOrderTraverseNode(root, callback);
    };
    var inOrderTraverseNode = function(node, callback) {
        // 遍历到 node 为 null 为止
        if (node !== null) {
            // 优先遍历左边节点，保证从小到大遍历
            inOrderTraverseNode(node.left, callback);
            // 处理当前的节点
            callback(node.key);
            // 遍历右侧节点
            inOrderTraverseNode(node.right, callback);
        }
    };

    // 后序遍历
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    };
    var postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback); //{1}
            postOrderTraverseNode(node.right, callback); //{2}
            callback(node.key); //{3}
        }
    };

    this.print = function() {
        console.log('root :', root);
        return root;
    };
}

// 测试
var binarySearchTree = new BinarySearchTree();
var arr = [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25];
for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    binarySearchTree.insert(value);
}

console.log('先序遍历：');
var arr = [];
binarySearchTree.preOrderTraverse(function(value) {
	// console.log(value);
	arr.push(value);
});
console.log('arr :', arr); // [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]
var min = binarySearchTree.min();
console.log('min:', min); // 3
var max = binarySearchTree.max();
console.log('max:', max); // 25
var search = binarySearchTree.search(10);
console.log('search:', search); // 10
var remove = binarySearchTree.remove(13);
console.log('remove:', remove); // 13
