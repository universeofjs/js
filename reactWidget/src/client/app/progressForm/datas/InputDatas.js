var datas = [
  {
    id: "tnumber",
    type: "text",
    label: "T Number:",
    value: "",
    validation: {
      rules: { tnumber: [ "required" ] },
      messages: { "required.tnumber": 'T Number required!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "firstName",
    type: "text",
    label: "First Name:",
    value: "",
    validation: {
      rules: { firstName: [ "required", "regex:/^([a-zA-z]{2,10})$/" ] },
      messages: { "required.firstName": 'First Name is required!', 'regex.firstName': 'Invlid first Name!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "lastName",
    type: "text",
    label: "Last Name:",
    value: "",
    validation: {
      rules: { lastName: [ "required", "regex:/^([a-zA-z]{2,10})$/" ] },
      messages: { "required.lastName": 'Last Name is required!', 'regex.lastName': 'Invalid last name!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "title",
    type: "text",
    label: "Job Title:",
    value: "",
    validation: {
      rules: { title: [ "required" ] },
      messages: { "required.title": 'Job Title is required!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "dob",
    type: "date",
    label: "Date Of Birth:",
    value: "",
    validation: {
      rules: { dob: [ "required" ] },
      messages: { "required.dob": 'DOB is required!'}
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "anniversaryDate",
    type: "date",
    label: "Anniversary Date:",
    value: "",
    validation: {
      rules: { anniversaryDate: [ "required" ] },
      messages: { "required.anniversaryDate": 'Anniversary Date is required!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "location",
    type: "select",
    options:[
              {
                value:"", 
                label:"Select Your Location"
              },
              {
                value:"Plymouth, MI", 
                label:"Plymouth, MI"
              },
              {
                value:"Boca, FL", 
                label:"Boca, FL"
              },
              {
                value:"Atlanta, GA", 
                label:"Atlanta, GA"
              }
            ],
    label: "Anniversary Date:",
    value: "",
    validation: {
      rules: { location: [ "required" ] },
      messages: { "required.location": 'Anniversary Date is required!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  }
];

module.exports = datas;
