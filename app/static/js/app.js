var ViewModel = function() {
    var self = this;
    self.hospital = ko.observable();
    self.hospitals = ko.observableArray();
}
var vm = new ViewModel();
pager.extendWithPage(vm);
ko.applyBindings(vm);
pager.start();