// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
//    ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
//    ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
//    ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import permissionEngine from '../dist/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
//    ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║
//    ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║
//    ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║
//    ╚═╝   ╚═══════╝╚═══════╝   ╚═╝

describe('Test', function() {
    // ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║         ╚══╗ ╔══╝║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ║   ║ ║║ ╚═══╝ ║║ ║║ ║║ ║╔═══════╗   ║ ║   ║ ╚═══╝ ║║ ║   ║ ║║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝   ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝║ ║║ ║║ ║╚═══════╝   ║ ║   ║ ╔═╗ ╔═╝║ ║   ║ ║║ ╔═════╝
    // ║ ║ ║ ╚═╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ║║ ╚╝ ║            ║ ║   ║ ║ ║ ╚═╗║ ╚═══╝ ║║ ╚═════╗
    // ╚═╝ ╚═══╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝╚════╝            ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═══════╝

    describe('#returnTrue()', function() {
        it('Should return true when function is called', () => {
            expect(permissionEngine.returnTrue()).to.equal(true);
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗         ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ║   ║ ║║ ╚═══╝ ║║ ║║ ║║ ║╔═══════╗║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝   ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝║ ║║ ║║ ║╚═══════╝║ ╔═════╝║ ╔═══╗ ║║ ║      ╚═════╗ ║║ ╔═════╝
    // ║ ║ ║ ╚═╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ║║ ╚╝ ║         ║ ║      ║ ║   ║ ║║ ╚═════╗╔═════╝ ║║ ╚═════╗
    // ╚═╝ ╚═══╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝╚════╝         ╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#returnFalse()', function() {
        it('Should return false when function is called', () => {
            expect(permissionEngine.returnFalse()).to.equal(false);
        });
    });
});
