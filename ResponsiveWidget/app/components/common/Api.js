// const LOCAL_BASE_URL = 'http://localhost:8080'
const REMOTE_BASE_URL = 'https://rewardswidgetapi.drwdev.com';

function callAPi(method, url, data = {}, successCallback, errorCallback) {
	$.ajax({
    method: method,
    url: REMOTE_BASE_URL + url,
    crossDomain: true,
    contentType: 'application/hal+json;charset=UTF-8',
    dataType: 'json',
    data: JSON.stringify(data)
  }).success(apiResponse => {
    console.log('success');
    console.log(apiResponse);
    successCallback(apiResponse);
  }).error(apiResponse => {
	console.log('error');
    console.log(apiResponse);
    errorCallback(apiResponse);
  });
}

export function getApiCall(url, data, successCallback, errorCallback) {
	callAPi('GET', url, data, successCallback, errorCallback);
}

export function postApiCall(url, data, successCallback, errorCallback) {
	callAPi('POST', url, data, successCallback, errorCallback);
}

