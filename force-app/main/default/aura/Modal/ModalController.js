/**
 * Created by Leonid Bartenev
 */
({
    doShow: function (component, event, helper) {
        component.set('v.visible', true);
    },

    doHide: function (component, event, helper) {
        component.set('v.visible', false);
    },

    doCancel: function (component, event, helper) {
        component.set('v.visible', false);
        var cancelCallback = component.get('v.cancelCallback');
        if(cancelCallback) cancelCallback();
    }
})