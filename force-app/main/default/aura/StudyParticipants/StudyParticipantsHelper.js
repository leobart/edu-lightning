/**
 * Created by Leonid Bartenev
 */
({
    updateParticipants: function (component) {
        var searchText = component.get('v.searchText');
        component.find('spinner').show();
        $LH.executeAction(component, 'getParticipants', {
            searchString: component.get('v.searchText')
        }, function (participants) {
            if(searchText === component.get('v.searchText')) {
                component.set('v.participants', participants);
                component.find('spinner').hide();
            }
        })
    }
})