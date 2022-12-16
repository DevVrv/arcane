"use strict";

// -- Element Control
class Control {
    constructor($s = String, $p = document) {

        // <-- get base params
        this.$s = $s;
        this.$p = $p;

        // parent survey
        if (typeof(this.$p) == 'string') {
            this.$p = this.document.querySelector(this.$p);
        }
        else if (this.$p != document && typeof(this.$p) == 'object') {
            this.$p = this.$p.$e;
        }

        // make querys
        this.$e = this._querys($s, $p);

        // make logging
        if (this.logging == true) {
            this._logger();
        }
    }

    // logger
    _logger(log = this) {
        console.log(log)
    }

    // <-- GET Elements
    _querys($s, $p) {
        if ($p.length == undefined) {
            return [...$p.querySelectorAll($s)];
        }
        else if ($p.length == 1) {
            return [...$p[0].querySelectorAll($s)];
        }
        else if ($p.length > 1) {
            return this._childs({$s: $s, $ps: $p, view: 'expanded'})
        }
    }
    _childs(args = {$s: String, $ps: Document}) {
        
        // expanded = Returns a single array
        // collapsed = Returns an array for each parent element

        const $s = args.$s;
        const $ps = args.$ps;
        const view = args.view;
        const nodes = [];
        
        $ps.map($p => {
            const node = [...$p.querySelectorAll($s)];

            if (view == 'collapsed') {
                nodes.push(node);
            }
            else {
                nodes.push(...node);
            }
        });

        return nodes;
    } 
}

// -- Element Control Initializer
function $(selector = String, parent = document) {
    return new Control(selector, parent);
}