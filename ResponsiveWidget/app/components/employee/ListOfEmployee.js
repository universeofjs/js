import React from 'react';
// import ShowEmployeeCards from './ShowEmployeeCards';
import BirthdayCard from './BirthdayCard';
import ProgressForm from '../progressForm/ProgressForm.js';
import {getApiCall, postApiCall} from '../common/Api';

let birthdayFormData = require( '../progressForm/datas/inputDatas.js');

export default class ListOfEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employees: [], showAddEmployeeForm: false};
    }
	
	componentWillMount() {
		this.getEmployeeData();
	}
	
	componentDidMount() {
        this.interval = 2000;
        fetch('http://localhost:8080/RewardsWidgetAPI/employees').then((response) => {
            return response.json();
        }).then((data) => {
            console.log('success');
            this.setState({employees: data._embedded.employees});
        }).catch((err) => {
            console.log('error');
            throw new Error(err);
        });
		
		$('.ui.modal')
		.modal({
			detachable: false,
			closable: true
		});
    }
	
	getEmployeeData() {
		const successCallback = (value) => {
		  if (value._embedded) {
			if (value._embedded.employees) {
			  this.setState({employees: value._embedded.employees});
			}
		  }
		};
		const errorCallBack = () => {

		};
		getApiCall('/RewardsWidgetAPI/employees', null, successCallback, errorCallBack);
	}
	
	createNewEmployee(value) {
		const successCallback = () => {
		  this.getEmployeeData();
		  this.onClosed();
		};
		const errorCallBack = () => {

		};
		postApiCall('/RewardsWidgetAPI/employees', value, successCallback, errorCallBack);
	}
	
	onClosed() {
		this.setState({showAddEmployeeForm: false});
	}
	
	showAddEmployeeForm() {
		this.setState({showAddEmployeeForm: true});
	}

    render() {
        return (
            <section className="employees">
                <section className="section-content-employee">
					<BirthdayCard employees={this.state.employees} showAddEmployeeForm={() => (this.setState({showAddEmployeeForm: true}))} />
                </section>
				{this.state.showAddEmployeeForm && <ProgressForm onClosed={this.onClosed.bind(this)} onSubmitButton={this.createNewEmployee.bind(this)} inputDatas={birthdayFormData}/>}
            </section>
        );
    }

}
