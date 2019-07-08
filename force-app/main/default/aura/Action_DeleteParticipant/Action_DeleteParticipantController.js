/**
 * Created by Leonid Bartenev
 */
({
    doExecute: function (component, event, helper) {
        var params = event.getParam('arguments');
        component.find('approveAction').execute('Delete Participant', 'Are you sure?', function () {
            $LH.executeAction(component, 'deleteParticipant', {
                participantId: params.participantId
            }, function () {
                if(params.callback) params.callback();
            })
        }, function () {
            if(params.cancelCallback) params.cancelCallback();
        });
    }
})