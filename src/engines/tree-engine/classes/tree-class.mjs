// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗   ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
//    ║ ║   ║ ╔═╗ ╔═╝║ ╔═════╝║ ╔═════╝╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║   ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
//    ║ ║   ║ ║ ║ ╚═╗║ ╚═════╗║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
//    ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import utilityEngine from '@s-a-r-c/utility-engine';

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

export default class Tree {
    // ╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔═══╗ ║║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║║ ╔═══╗ ║
    // ║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║   ║ ║║ ║         ║ ║   ║ ║   ║ ║║ ╚═══╝ ║
    // ║ ║      ║ ║   ║ ║║ ║║ ║║ ║╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝║ ║   ║ ║║ ║         ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝
    // ║ ╚═════╗║ ╚═══╝ ║║ ║║ ╚╝ ║╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗
    // ╚═══════╝╚═══════╝╚═╝╚════╝╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝

    constructor(json) {
        this._json = json;
    }

    // ╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔╗ ║║ ║║ ╔═══╗ ║╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝
    // ║ ║║ ║║ ║║ ║   ║ ║ ║ ║  ║ ║║ ╚═════╗║ ╚═════╗
    // ║ ║║ ║║ ║║ ║   ║ ║ ║ ║  ║ ║║ ╔═════╝╚═════╗ ║
    // ║ ║║ ╚╝ ║║ ╚═══╝ ║╔╝ ╚══╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    getNode(key) {
        return key.getNodes().reduce((treeNode, keyNode) => {
            return utilityEngine.isObject(treeNode) ? treeNode[keyNode] :
                utilityEngine.isBoolean(treeNode) ? treeNode : false;
        }, this.toJson());
    }

    // ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗
    // ╚═══╗ ╔═╝║ ╔═════╝║ ╔═══╗ ║║ ╔╗ ║║ ║
    //     ║ ║  ║ ╚═════╗║ ║   ║ ║║ ║║ ║║ ║
    //     ║ ║  ╚═════╗ ║║ ║   ║ ║║ ║║ ║║ ║
    // ╔═══╝ ║  ╔═════╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║
    // ╚═════╝  ╚═══════╝╚═══════╝╚═╝╚════╝

    toJson() {
        return this._json;
    }
}
