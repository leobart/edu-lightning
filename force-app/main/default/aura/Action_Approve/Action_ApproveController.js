/**
 * Created by Leonid Bartenev
 */
({
    doExecute: function(component, event, helper) {
        var params = event.getParam('arguments');
        component.set('v.title', params.title);
        component.set('v.message', params.message);
        component.set('v.callback', params.callback);
        var actionApproveModal = component.find('actionApproveModal');
        actionApproveModal.set('v.cancelCallback', params.cancelCallback);
        actionApproveModal.show();
    },

    doOk: function (component, event, helper) {
        var callback = component.get('v.callback');
        if(callback) callback();
        component.find('actionApproveModal').hide();
    },

    doCancel: function (component, event, hepler) {
        component.find('actionApproveModal').cancel();
    }
})