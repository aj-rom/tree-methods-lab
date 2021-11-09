
function inOrder(tree) {
    if (tree.left) inOrder(tree.left)
    console.log(tree.data)
    if (tree.right) inOrder(tree.right)
}

function findOrAdd(rootNode, nodeToAdd) {
    let rootData = rootNode.data
    let nodeData = nodeToAdd.data

    if (rootData === nodeData)
        return true

    if (rootData > nodeData) {
        let { left } = rootNode
        return left ? findOrAdd(left, nodeToAdd) : rootNode.left = nodeToAdd
    }

    if (rootData < nodeData) {
        let { right } = rootNode
        return right ? findOrAdd(right, nodeToAdd) : rootNode.right = nodeToAdd
    }

}

function max(tree) {
    return tree.right ? max(tree.right) : tree
}

function min(tree) {
    return tree.left ? min(tree.left) : tree
}