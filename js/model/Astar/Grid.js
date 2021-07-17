import Node from './Node.js';

export default class Grid {
    constructor(listSquare, size) {
        this.size = size;
        this.listSquare = listSquare;
    }

    getPath(origin, destination) {
        let path = Array();
        let hierarchicPath = this.findPath(origin, destination);
        while (hierarchicPath != null) {
            path.push(hierarchicPath.square);
            hierarchicPath = hierarchicPath.parent;
        }
        return path.reverse();
    }

    findPath(origin, destination) {
        origin = new Node(origin);
        destination = new Node(destination);
        origin.g = 0;
        origin.f = 0;

        this.openList = [origin];
        this.closeList = [];
        do {
            let bestNode = this.getBestNode();
            this.openList = this.openList.filter(node => node.x != bestNode.x || node.y != bestNode.y);

            let checkList = this.getChildNode(bestNode, destination);

            for (let checknode of checkList) {
                if (!checknode.isBlocked) {
                    if (checknode.x == destination.x && checknode.y == destination.y) {
                        return checknode;
                    }
                    if (!this.openList.some(node => checknode.x == node.x && checknode.y == node.y && node.f < checknode.f) &&
                        !this.closeList.some(node => checknode.x == node.x && checknode.y == node.y)) {
                        this.openList.push(checknode);
                    }
                }
            }
            this.closeList.push(bestNode);
        } while (this.openList.length != 0);
        return null;
    }

    getBestNode() {
        let bestNode = null;
        for (let node of this.openList) {
            if (bestNode == null) {
                bestNode = node;
            } else if (node.f < bestNode.f) {
                bestNode = node;
            }
        }
        return bestNode;
    }

    getChildNode(parent, destination) {
        let checkList = Array();

        if (parent.x > 0) {
            let nodeLeft = new Node(this.listSquare.find(square => square.x == parent.x - 1 && square.y == parent.y));
            nodeLeft.heuristic(parent, destination);
            checkList.push(nodeLeft);
        }

        if (parent.x < this.size.width - 1) {
            let nodeRight = new Node(this.listSquare.find(square => square.x == parent.x + 1 && square.y == parent.y));
            nodeRight.heuristic(parent, destination);
            checkList.push(nodeRight);
        }

        if (parent.y > 0) {
            let nodeTop = new Node(this.listSquare.find(square => square.x == parent.x && square.y == parent.y - 1));
            nodeTop.heuristic(parent, destination);
            checkList.push(nodeTop);
        }


        if (parent.y < this.size.height - 1) {
            let nodeBottom = new Node(this.listSquare.find(square => square.x == parent.x && square.y == parent.y + 1));
            nodeBottom.heuristic(parent, destination);
            checkList.push(nodeBottom);
        }

        return checkList;
    }
}