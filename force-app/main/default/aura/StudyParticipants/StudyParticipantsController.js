/**
 * Created by Leonid Bartenev
 */
({
    doGetParticipants: function(component, event, hepler){
        hepler.updateParticipants(component);
    },

    doAddParticipant: function (component, event, hepler) {
        component.find('actionAddParticipant').execute(function () {
            hepler.updateParticipants(component);
        })
    },

    doDeleteParticipant: function (component, event, hepler) {
        component.find('spinner').show();
        var participantId = event.currentTarget.dataset.participantId;
        component.find('actionDeleteParticipant').execute(participantId, function () {
            hepler.updateParticipants(component);
        }, function () {
            component.find('spinner').hide();
        });
    }

})