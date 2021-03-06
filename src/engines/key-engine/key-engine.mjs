// ╔═╗ ╔═╗  ╔═══════╗╔═╗   ╔═╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ║ ║ ║  ║ ╔═════╝║ ║   ║ ║         ║ ╔═════╝║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═╝ ╚═╗║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═════╗║ ║║ ║║ ║║ ║ ╔═══╗   ║ ║   ║ ║║ ║║ ║║ ╚═════╗   ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ╔═══╗ ║║ ╔═════╝╚═════╗ ║╚═══════╝║ ╔═════╝║ ║║ ║║ ║║ ║ ╚═╗ ║   ║ ║   ║ ║║ ║║ ║║ ╔═════╝   ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ║   ║ ║║ ╚═════╗╔═════╝ ║         ║ ╚═════╗║ ║║ ╚╝ ║║ ╚═══╝ ║╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═════╗╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import Key from './classes/key-class.mjs';

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔═════╝
// ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║   ║ ║   ║ ╚═════╗
// ║ ║      ║ ╔═╗ ╔═╝║ ╔═════╝║ ╔═══╗ ║   ║ ║   ║ ╔═════╝
// ║ ╚═════╗║ ║ ║ ╚═╗║ ╚═════╗║ ║   ║ ║   ║ ║   ║ ╚═════╗
// ╚═══════╝╚═╝ ╚═══╝╚═══════╝╚═╝   ╚═╝   ╚═╝   ╚═══════╝

export function createKey(keyString) {
    return new Key(keyString);
}
