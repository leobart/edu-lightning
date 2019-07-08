/**
 * Created by Leonid Bartenev
 */
({
    doExecute: function (component, event, helper) {
        var params = event.getParam('arguments');
        component.set('v.callback', params.callback);
        component.set('v.participant', {
            sobjectType: 'Participant__c'
        });
        var todayDate = $A.localizationService.formatDate(new Date(), 'YYYY-MM-DD');
        component.set('v.todayDate', todayDate);
        component.find('addParticipantModal').show();
    },

    doCancel: function (component, event, helper) {
        component.find('addParticipantModal').cancel();
    },

    doSave: function (component, event, helper) {
        $LH.executeAction(component, 'addParticipant', {
            participant: component.get('v.participant')
        }, function () {
            component.find('addParticipantModal').hide();
            var callback = component.get('v.callback');
            if(callback) callback();
        });
    },
    
    doCheckFields: function (component, event, helper) {
        var allValid = component.find('inputField').reduce(function (validSoFar, inputCmp) {
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        component.set('v.disabled', !allValid);
    }

})