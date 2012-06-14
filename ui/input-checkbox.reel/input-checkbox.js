/* <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2012 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> */
/*global require,exports */
var Montage = require("montage").Montage,
    Component = require("ui/component").Component,
    NativeInputCheckbox = require("ui/native/input-checkbox.reel").InputCheckbox;    
 
/**
 * Input Checkbox
 */
exports.InputCheckbox = Montage.create(NativeInputCheckbox, {
     
    hasTemplate: {value: true},
     
    didSetElement: {
        value: function() {
            NativeInputCheckbox.didSetElement.call(this);
            this['class'] = (this['class'] || '') + ' montage-inputCheckbox';
        }
    }
     
});