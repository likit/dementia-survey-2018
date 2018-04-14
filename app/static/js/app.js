var getHospitals = function(viewModel) {
    var data = $.getJSON("/api/v1/hospitals/", function(data) {
      $.each(data, function(idx, d) {
        viewModel.hospitals.push(d);
      });
    });
}

var ViewModel = function() {
    var self = this;
    self.currPageId = ko.observable();
    self.surveyId = ko.observable();
    self.hospital = ko.observable();
    self.hospitals = ko.observableArray();
    self.surveyorName = ko.observable();
    self.surveyorPosition = ko.observable();
    self.surveyorTel = ko.observable();
    self.surveyorEmail = ko.observable();
    self.surveyDate = ko.observable();
    self.pntFirstName = ko.observable();
    self.pntLastName = ko.observable();
    self.pntPID = ko.observable();
    self.pntAddress = ko.observable();
    self.pntVillage = ko.observable();
    self.pntSubDistrict = ko.observable();
    self.pntDistrict = ko.observable();
    self.pntProvince = ko.observable();
    self.pntGender = ko.observable();
    self.pntAge = ko.observable();
    self.pntDischargedDate = ko.observable();
    self.pntDiagnosis = ko.observable();
    self.pntHasComplications = ko.observable();
    self.pntComplications = ko.observable();
    self.hospitalSize = ko.observable();
    self.pntRtnHospitalSize = ko.observable();
    self.pntRtnDate = ko.observable();
    self.pntRtnTimes = ko.observable();
    self.pntRtnProblem = ko.observable();
    self.pntRtnStayDays = ko.observable();
    self.pntRtnHasComplications = ko.observable();
    self.pntRtnComplications = ko.observable();
    self.pntADLScore = ko.observable();
    self.pntWeight = ko.observable();
    self.pntHasFallen = ko.observable();
    self.pntFallTimes = ko.observable();
    self.pntHurtAt = ko.observable();
    self.majorCarerFirstname = ko.observable();
    self.majorCarerLastname = ko.observable();
    self.majorCarerPID = ko.observable();
    self.majorCarerAddress = ko.observable();
    self.majorCarerVillage = ko.observable();
    self.majorCarerSubDistrict = ko.observable();
    self.majorCarerDistrict = ko.observable();
    self.majorCarerProvince = ko.observable();
    self.majorCarerGender = ko.observable();
    self.majorCarerAge = ko.observable();
    self.majorCarerMarital = ko.observable();
    self.majorCarerReligion = ko.observable();
    self.majorCarerReligionOther = ko.observable();
    self.majorCarerEd = ko.observable();
    self.majorCarerRelation = ko.observable();
    self.majorCarerRelationOther = ko.observable();
    self.majorCarerCareer = ko.observable();
    self.majorCarerCareerOther = ko.observable();
    self.majorCarerIncome = ko.observable();
    self.majorCarerAvgIncome = ko.observable();
    self.majorCarerIncomeProblem = ko.observable();
    self.majorCarerIncomeProblemDetail = ko.observable();
    self.majorCarerHealthProblems = ko.observableArray([]);
    self.majorCarerHealthProblemDetail = ko.observable();
    self.majorCarerTimeDay = ko.observable();
    self.majorCarerTimeMonth = ko.observable();
    self.majorCarerTimeYear = ko.observable();
    self.majorCarerReasons = ko.observableArray([]);
    self.majorCarerReasonsOther = ko.observable();
    self.majorCarerHasBurden = ko.observable();
    self.majorCarerBurden = ko.observable();
    self.majorCarerHasAssistant = ko.observable();
    self.majorCarerNumAssistant = ko.observable();
    self.majorCarerHasTrained = ko.observable();
    self.majorCarerHasExp = ko.observable();
    self.majorCarerExpDuration = ko.observable();

    self.minorCarerFirstname = ko.observable();
    self.minorCarerLastname = ko.observable();
    self.minorCarerPID = ko.observable();
    self.minorCarerAddress = ko.observable();
    self.minorCarerVillage = ko.observable();
    self.minorCarerSubDistrict = ko.observable();
    self.minorCarerDistrict = ko.observable();
    self.minorCarerProvince = ko.observable();
    self.minorCarerGender = ko.observable();
    self.minorCarerAge = ko.observable();
    self.minorCarerMarital = ko.observable();
    self.minorCarerReligion = ko.observable();
    self.minorCarerReligionOther = ko.observable();
    self.minorCarerEd = ko.observable();
    self.minorCarerRelation = ko.observable();
    self.minorCarerRelationOther = ko.observable();
    self.minorCarerCareer = ko.observable();
    self.minorCarerCareerOther = ko.observable();
    self.minorCarerIncome = ko.observable();
    self.minorCarerAvgIncome = ko.observable();
    self.minorCarerIncomeProblem = ko.observable();
    self.minorCarerIncomeProblemDetail = ko.observable();
    self.minorCarerHealthProblems = ko.observableArray([]);
    self.minorCarerHealthProblemDetail = ko.observable();
    self.minorCarerTimeDay = ko.observable();
    self.minorCarerTimeMonth = ko.observable();
    self.minorCarerTimeYear = ko.observable();
    self.minorCarerReasons = ko.observableArray([]);
    self.minorCarerReasonsOther = ko.observable();
    self.minorCarerHasBurden = ko.observable();
    self.minorCarerBurden = ko.observable();
    self.minorCarerHasAssistant = ko.observable();
    self.minorCarerNumAssistant = ko.observable();
    self.minorCarerHasTrained = ko.observable();
    self.minorCarerHasExp = ko.observable();
    self.minorCarerExpDuration = ko.observable();

    self.nursing_1_1 = ko.observable();
    self.nursing_1_2 = ko.observable();
    self.nursing_1_3 = ko.observable();
    self.nursing_1_4 = ko.observable();
    self.nursing_2_1 = ko.observable();
    self.nursing_2_2 = ko.observable();
    self.nursing_2_3 = ko.observable();
    self.nursing_2_4 = ko.observable();
    self.nursing_3_1 = ko.observable();
    self.nursing_3_2 = ko.observable();
    self.nursing_3_3 = ko.observable();
    self.nursing_3_4 = ko.observable();
    self.nursing_4_1 = ko.observable();
    self.nursing_4_2 = ko.observable();
    self.nursing_4_3 = ko.observable();
    self.nursing_4_4 = ko.observable();
    self.nursing_5_1 = ko.observable();
    self.nursing_5_2 = ko.observable();
    self.nursing_5_3 = ko.observable();
    self.nursing_5_4 = ko.observable();
    self.nursing_6_1 = ko.observable();
    self.nursing_6_2 = ko.observable();
    self.nursing_6_3 = ko.observable();
    self.nursing_6_4 = ko.observable();
    self.nursing_7_1 = ko.observable();
    self.nursing_7_2 = ko.observable();
    self.nursing_7_3 = ko.observable();
    self.nursing_7_4 = ko.observable();
    self.nursing_8_1 = ko.observable();
    self.nursing_8_2 = ko.observable();
    self.nursing_8_3 = ko.observable();
    self.nursing_8_4 = ko.observable();
    self.nursing_9_1 = ko.observable();
    self.nursing_9_2 = ko.observable();
    self.nursing_9_3 = ko.observable();
    self.nursing_9_4 = ko.observable();
    self.nursing_9_comment = ko.observable();
    self.nursing_10_1 = ko.observable();
    self.nursing_10_2 = ko.observable();
    self.nursing_10_3 = ko.observable();
    self.nursing_10_4 = ko.observable();
    self.nursing_11_1 = ko.observable();
    self.nursing_11_2 = ko.observable();
    self.nursing_11_3 = ko.observable();
    self.nursing_11_4 = ko.observable();
    self.nursing_11_comment = ko.observable();
    self.nursing_12_1 = ko.observable();
    self.nursing_12_2 = ko.observable();
    self.nursing_12_3 = ko.observable();
    self.nursing_12_4 = ko.observable();
    self.nursing_12_comment = ko.observable();
    self.nursing_13_1 = ko.observable();
    self.nursing_13_2 = ko.observable();
    self.nursing_13_3 = ko.observable();
    self.nursing_13_4 = ko.observable();
    self.nursing_13_comment = ko.observable();
    self.nursing_14_1 = ko.observable();
    self.nursing_14_2 = ko.observable();
    self.nursing_14_3 = ko.observable();
    self.nursing_14_4 = ko.observable();
    self.nursing_14_comment = ko.observable();
    self.nursing_15_1 = ko.observable();
    self.nursing_15_2 = ko.observable();
    self.nursing_15_3 = ko.observable();
    self.nursing_15_4 = ko.observable();
    self.nursing_16_1 = ko.observable();
    self.nursing_16_2 = ko.observable();
    self.nursing_16_3 = ko.observable();
    self.nursing_16_4 = ko.observable();
    self.nursing_17_1 = ko.observable();
    self.nursing_17_2 = ko.observable();
    self.nursing_17_3 = ko.observable();
    self.nursing_17_4 = ko.observable();
    self.nursing_18_1 = ko.observable();
    self.nursing_18_2 = ko.observable();
    self.nursing_18_3 = ko.observable();
    self.nursing_18_4 = ko.observable();
    self.nursing_19_1 = ko.observable();
    self.nursing_19_2 = ko.observable();
    self.nursing_19_3 = ko.observable();
    self.nursing_19_4 = ko.observable();
    self.hcare_1 = ko.observable();
    self.hcare_2 = ko.observable();
    self.hcare_2_1 = ko.observableArray([]);
    self.hcare_2_comment = ko.observable();
    self.hcare_3_1 = ko.observable();
    self.hcare_3_2 = ko.observable();
    self.hcare_3_3 = ko.observable();
    self.hcare_3_4 = ko.observable();
    self.hcare_3_5 = ko.observable();
    self.hcare_3_6 = ko.observable();
    self.hcare_4 = ko.observableArray([]);
    self.hcare_4_other = ko.observable();
    self.hcare_5 = ko.observableArray([]);
    self.hcare_6 = ko.observable();
    self.hcare_7_1 = ko.observable();
    self.hcare_7_2 = ko.observableArray([]);
    self.hcare_7_2_other = ko.observable();
    self.hcare_8 = ko.observable();
    self.hcare_9 = ko.observable();
    self.hcare_9_other = ko.observable();
    self.hcare_10 = ko.observableArray([]);
    self.hcare_10_other = ko.observable();
    self.hcare_11_1 = ko.observable();
    self.hcare_11_2 = ko.observable();
    self.hcare_11_3 = ko.observable();
    self.hcare_12_1 = ko.observable();
    self.hcare_12_2 = ko.observableArray([]);
    self.hcare_12_2_other = ko.observable();
    self.hcare_13 = ko.observableArray([]);
    self.hcare_13_other = ko.observable();
    self.hcare_14_1 = ko.observable();
    self.hcare_14_2 = ko.observable();
    self.hcare_14_3 = ko.observable();
    self.hcare_14_4 = ko.observable();
    self.hcare_14_5 = ko.observable();
    self.hcare_15 = ko.observable();
    self.hcare_16_1 = ko.observable();
    self.hcare_16_2 = ko.observableArray([]);
    self.hcare_16_2_other = ko.observable();
    self.hcare_17 = ko.observable();
    self.hcare_18 = ko.observable();
    self.hcare_19 = ko.observable();
    self.hcare_20 = ko.observable();
    self.hcare_21 = ko.observable();
    self.hcare_22 = ko.observable();
    self.hcare_23 = ko.observable();
    self.hcare_24 = ko.observable();
    self.hcare_25 = ko.observable();
    self.hcare_26 = ko.observable();
    self.hcare_27 = ko.observable();
    self.hcare_28 = ko.observable();
    self.hcare_29 = ko.observable();
    self.hcare_30 = ko.observable();
    self.hcare_31 = ko.observable();
    self.hcare_32 = ko.observable();
    self.hcare_33 = ko.observable();
    self.hcare_34 = ko.observable();

    self.env_1 = ko.observable();
    self.env_2 = ko.observable();
    self.env_3 = ko.observable();
    self.env_4 = ko.observable();
    self.env_5 = ko.observable();
    self.env_6 = ko.observable();
    self.env_7 = ko.observable();
    self.env_8 = ko.observable();
    self.env_9 = ko.observable();
    self.env_10 = ko.observable();
    self.env_11 = ko.observable();
    self.env_12 = ko.observable();
    self.env_13 = ko.observable();
    self.env_14 = ko.observable();
    self.env_15 = ko.observable();
    self.env_16 = ko.observable();
    self.env_17 = ko.observable();
    self.env_18 = ko.observable();

    self.lab_1 = ko.observable();
    self.lab_1_res = ko.observable();
    self.lab_1_1 = ko.observable();
    self.lab_1_2 = ko.observable();
    self.lab_1_3 = ko.observable();
    self.lab_1_4 = ko.observable();
    self.lab_2 = ko.observable();
    self.lab_2_res = ko.observable();
    self.lab_2_1 = ko.observable();
    self.lab_2_2 = ko.observable();
    self.lab_2_3 = ko.observable();
    self.lab_2_4 = ko.observable();
    self.lab_3 = ko.observable();
    self.lab_3_res = ko.observable();
    self.lab_3_1 = ko.observable();
    self.lab_3_2 = ko.observable();
    self.lab_3_3 = ko.observable();
    self.lab_3_4 = ko.observable();
    self.lab_4 = ko.observable();
    self.lab_4_res = ko.observable();
    self.lab_4_1 = ko.observable();
    self.lab_4_2 = ko.observable();
    self.lab_4_3 = ko.observable();
    self.lab_4_4 = ko.observable();
    self.lab_5 = ko.observable();
    self.lab_5_res = ko.observable();
    self.lab_5_1 = ko.observable();
    self.lab_5_2 = ko.observable();
    self.lab_5_3 = ko.observable();
    self.lab_5_4 = ko.observable();
    self.lab_6 = ko.observable();
    self.lab_6_res = ko.observable();
    self.lab_6_1 = ko.observable();
    self.lab_6_2 = ko.observable();
    self.lab_6_3 = ko.observable();
    self.lab_6_4 = ko.observable();
    self.lab_7 = ko.observable();
    self.lab_7_res = ko.observable();
    self.lab_7_1 = ko.observable();
    self.lab_7_2 = ko.observable();
    self.lab_7_3 = ko.observable();
    self.lab_7_4 = ko.observable();
    self.lab_8 = ko.observable();
    self.lab_8_res = ko.observable();
    self.lab_8_1 = ko.observable();
    self.lab_8_2 = ko.observable();
    self.lab_8_3 = ko.observable();
    self.lab_8_4 = ko.observable();
    self.lab_9 = ko.observable();
    self.lab_9_res = ko.observable();
    self.lab_9_1 = ko.observable();
    self.lab_9_2 = ko.observable();
    self.lab_9_3 = ko.observable();
    self.lab_9_4 = ko.observable();
    self.lab_10 = ko.observable();
    self.lab_10_res = ko.observable();
    self.lab_10_1 = ko.observable();
    self.lab_10_2 = ko.observable();
    self.lab_10_3 = ko.observable();
    self.lab_10_4 = ko.observable();
    self.lab_11 = ko.observable();
    self.lab_11_res = ko.observable();
    self.lab_11_1 = ko.observable();
    self.lab_11_2 = ko.observable();
    self.lab_11_3 = ko.observable();
    self.lab_11_4 = ko.observable();
    self.lab_12 = ko.observable();
    self.lab_12_res = ko.observable();
    self.lab_12_1 = ko.observable();
    self.lab_12_2 = ko.observable();
    self.lab_12_3 = ko.observable();
    self.lab_12_4 = ko.observable();
    self.lab_13 = ko.observable();
    self.lab_13_res = ko.observable();
    self.lab_13_1 = ko.observable();
    self.lab_13_2 = ko.observable();
    self.lab_13_3 = ko.observable();
    self.lab_13_4 = ko.observable();
    self.lab_14 = ko.observable();
    self.lab_14_res = ko.observable();
    self.lab_14_1 = ko.observable();
    self.lab_14_2 = ko.observable();
    self.lab_14_3 = ko.observable();
    self.lab_14_4 = ko.observable();
    self.lab_15 = ko.observable();
    self.lab_15_res = ko.observable();
    self.lab_15_1 = ko.observable();
    self.lab_15_2 = ko.observable();
    self.lab_15_3 = ko.observable();
    self.lab_15_4 = ko.observable();
    self.lab_16 = ko.observable();
    self.lab_16_res = ko.observable();
    self.lab_16_1 = ko.observable();
    self.lab_16_2 = ko.observable();
    self.lab_16_3 = ko.observable();
    self.lab_16_4 = ko.observable();
    self.lab_17 = ko.observable();
    self.lab_17_res = ko.observable();
    self.lab_17_1 = ko.observable();
    self.lab_17_2 = ko.observable();
    self.lab_17_3 = ko.observable();
    self.lab_17_4 = ko.observable();
    self.lab_18 = ko.observable();
    self.lab_18_res = ko.observable();
    self.lab_18_1 = ko.observable();
    self.lab_18_2 = ko.observable();
    self.lab_18_3 = ko.observable();
    self.lab_18_4 = ko.observable();
    self.lab_19 = ko.observable();
    self.lab_19_res = ko.observable();
    self.lab_19_1 = ko.observable();
    self.lab_19_2 = ko.observable();
    self.lab_19_3 = ko.observable();
    self.lab_19_4 = ko.observable();
    self.lab_20 = ko.observable();
    self.lab_20_res = ko.observable();
    self.lab_20_1 = ko.observable();
    self.lab_20_2 = ko.observable();
    self.lab_20_3 = ko.observable();
    self.lab_20_4 = ko.observable();

    self.adl_1 = ko.observable();
    self.adl_2 = ko.observable();
    self.adl_3 = ko.observable();
    self.adl_4 = ko.observable();
    self.adl_5 = ko.observable();
    self.adl_6 = ko.observable();
    self.adl_7 = ko.observable();
    self.adl_8 = ko.observable();
    self.adl_9 = ko.observable();
    self.adl_10 = ko.observable();

    self.tgds_1 = ko.observable();
    self.tgds_2 = ko.observable();
    self.tgds_3 = ko.observable();
    self.tgds_4 = ko.observable();
    self.tgds_5 = ko.observable();
    self.tgds_6 = ko.observable();
    self.tgds_7 = ko.observable();
    self.tgds_8 = ko.observable();
    self.tgds_9 = ko.observable();
    self.tgds_10 = ko.observable();
    self.tgds_11 = ko.observable();
    self.tgds_12 = ko.observable();
    self.tgds_13 = ko.observable();
    self.tgds_14 = ko.observable();
    self.tgds_15 = ko.observable();
    self.tgds_16 = ko.observable();
    self.tgds_17 = ko.observable();
    self.tgds_18 = ko.observable();
    self.tgds_19 = ko.observable();
    self.tgds_20 = ko.observable();
    self.tgds_21 = ko.observable();
    self.tgds_22 = ko.observable();
    self.tgds_23 = ko.observable();
    self.tgds_24 = ko.observable();
    self.tgds_25 = ko.observable();
    self.tgds_26 = ko.observable();
    self.tgds_27 = ko.observable();
    self.tgds_28 = ko.observable();
    self.tgds_29 = ko.observable();
    self.tgds_30 = ko.observable();
    self.twoq_1 = ko.observable();
    self.twoq_2 = ko.observable();

    self.filteredHospitals = ko.observableArray();
    self.selectedHospital = ko.observable();
    self.hospitalId = ko.observable();
    self.hospitalName = ko.observable();
    self.hospitalDistrict = ko.observable();
    self.hospitalSubDistrict = ko.observable();
    self.hospitalProvince = ko.observable();
    self.hospitalAreaId = ko.observable();
    self.healthServiceAreaId = ko.observable()
    self.hospitalNumBed = ko.observable();
    self.hospitalRegion = ko.observable();
    self.hospitalServicePlan = ko.observable();

    self.searchHospital = function(query) {
      if(query==='') {
        self.filteredHospitals([]);
      } else {
        self.filteredHospitals([]);
        $.each(self.hospitals(), function(idx, hos) {
          if(hos.unit_fullname.indexOf(query) > -1 ){
            self.filteredHospitals.push(hos);
          }
        });
      }
    };
    self.selectHospital = function(hos) {
      self.hospitalId(hos['unit_id_short']);
      self.hospitalName(hos['unit_fullname']);
      self.hospitalDistrict(hos['district_name']);
      self.hospitalSubDistrict(hos['subdistrict_name']);
      self.hospitalProvince(hos['province_name']);
      self.hospitalAreaId(hos['area_id']);
      self.healthServiceAreaId(hos['hs_area_id']);
      self.hospitalNumBed(hos['num_bed']);
      self.hospitalRegion(hos['region']);
      self.hospitalServicePlan(hos['unit_service_plan']);
      self.filteredHospitals([]);
      self.selectedHospital(hos);
    };
}
var vm = new ViewModel();

var submitResults = function() {
  var tmp = vm;
  delete tmp.$__page__; // causes error if not removed
  var data = ko.toJS(tmp);
  delete data['filteredHospitals'];
  delete data['selectedHospital'];
  delete data['searchHospital'];
  delete data['selectHospital'];
  delete data['hospital'];
  if (typeof vm.surveyorName === 'undefined') {
    alert('กรุณาตรวจสอบชื่อผู้ป่วย');
    return;
  }
  if (typeof vm.pntFirstName === 'undefined') {
    alert('กรุณาตรวจสอบชื่อผู้ป่วย');
    return;
  }
  if (typeof vm.pntLastName === 'undefined') {
    alert('กรุณาตรวจสอบชื่อนามสกุลผู้ป่วย');
    return;
  }
  if (typeof vm.pntPID() === 'undefined') {
    alert('กรุณาตรวจสอบรหัสบัตรประชาชนผู้ป่วย');
    return;
  }
  if (typeof vm.hospitalId() === 'undefined') {
    alert('กรุณาเลือกสถานพยาบาล');
    return;
  }
  $.ajax({
    url: '/api/v1/results/',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    dataType: 'json'
  }).done(function(data) {
    vm.surveyId(data.response);
    alert('บันทึกข้อมูลแล้ว')
  });
}

pager.extendWithPage(vm);
ko.applyBindings(vm);
vm.hospital.subscribe(vm.searchHospital);

getHospitals(vm);  // fetch a list of hospitals from the server

pager.start();

var restart = function() {
  pager.navigate('start')
}


