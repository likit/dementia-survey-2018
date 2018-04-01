var getHospitals = function(viewModel) {
    var data = $.getJSON("/api/hospitals", function(data) {
        $.each(data, function(i, d) {
            viewModel.hospitals.push(d);
        });
    });
}

var ViewModel = function() {
    var self = this;
    self.hospital = ko.observable();
    self.hospitals = ko.observableArray();
}
var vm = new ViewModel();
pager.extendWithPage(vm);
ko.applyBindings(vm);

getHospitals(vm);  // fetch a list of hospitals from the server

pager.start();