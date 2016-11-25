var datas = [
  {
    id: "releaseNumber",
    type: "text",
    label: "Release Number:",
    value: "",
    validation: {
      rules: { releaseNumber: [ "required" ] },
      messages: { "required.releaseNumber": 'Release Number required!'}
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "codeLockDownDate",
    type: "date",
    label: "Code LockDown:",
    value: "",
    validation: {
      rules: { codeLockDownDate: [ "required" ] },
      messages: { "required.codeLockDownDate": 'Code lockdown date is required!'}
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "rcDeploymentDate",
    type: "date",
    label: "Deployment to RC:",
    value: "",
    validation: {
      rules: { rcDeploymentDate: [ "required" ] },
      messages: { "required.rcDeploymentDate": 'Deployment to Rc date is required!'}
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "xuatDeploymentDate",
    type: "date",
    label: "Deployment to XUAT:",
    value: "",
    validation: {
      rules: { xuatDeploymentDate: [ "required" ] },
      messages: { "required.xuatDeploymentDate": 'Deployment to XUAT date is required!'}
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "prodDeploymentDate",
    type: "date",
    label: "Deployment to Production:",
    value: "",
    validation: {
      rules: { prodDeploymentDate: [ "required" ] },
      messages: { "required.prodDeploymentDate": 'Deployment to Production date is required!'}
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "releaseNotes",
    type: "textarea",
    label: "Release Note:",
    value: "",
    validation: {
      rules: { releaseNotes: [ "required" ] },
      messages: { "required.releaseNotes": 'Release note is required!'}
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  }
];

module.exports = datas;
