"use strict";

// -- Element Control
class Control {
    constructor($s = String, $p = document, args = {}) {

        // <-- get base params
        this.$s = $s;
        this.$p = $p;
        this._args = args;

        // parent survey
        if (typeof(this.$p) == 'string') {
            this.$p = this.document.querySelector(this.$p);
        }
        else if (this.$p != document && typeof(this.$p) == 'object') {
            this.$p = this.$p.$e;
        }

        // make querys
        this.$e = this.querys(this.$s, this.$p);

        // make logging
        if (this._args.logging == true) {
        }
        this._logger();
    }

    // logger
    _logger(log = this) {
        console.log(log)
    }

    // <-- GET Elements
    querys($s, $p) {

        if ($p == document) {
            return [...$p.querySelectorAll($s)];
        }
        else if ($p.length == 1) {
            return [...this.$p[0].querySelectorAll($s)];
        }
        else if ($p.length > 1) {
            return this.childs({$s: $s, $ps: $p}, this._args.$eView);
        }
        
    }
    childs(args = {$s: String, $ps: Document}, view = 'unpack') {
        
        // pack = Returns an array for each parents elements
        // unpack = Returns a single array

        const $s = args.$s;
        const $ps = args.$ps;
        const nodes = [];
        
        console.log()
        $ps.map($p => {
            const node = [...$p.querySelectorAll($s)];

            if (view == 'pack') {
                nodes.push(node);
            }
            else {
                nodes.push(...node);
            }

        });

        return nodes;
    }
    near($s, $e) {}
    
    // --> SET event
    event(args = {}) {
        this.event = {};
        this.event.type = args.type || 'click';
        this.event.object = null;
        this.event.trigger = args.trigger || this.$e;
        this.event.target = args.target || this.$e;
        this.event.action = args.action || console.log('You have to set some action in args');

        for (let index = 0; index < this.event.trigger.length; index++) {
            this.event.target[index].addEventListener(this.event.type, (e) => {
                this.event.object = e;
                this.event.action();
            });

        }
    }

    // --> SET class name
    class(name = String, args = {}) {

        // add - add class name
        // remove - remove class name
        // has - return bool
        // toggle - toggle class name
        action = args.action || 'add';

        targets.map(target => {



        });

    }
}

// -- Element Control Initializer
function $(selector = String, parent = document, args = {}) {
    return new Control(selector, parent, args);
}