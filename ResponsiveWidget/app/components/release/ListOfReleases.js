import React from 'react';
// import ShowRelease from './ShowRelease';
import ShowReleaseCards from './ShowReleaseCards';
import ProgressForm from '../progressForm/ProgressForm.js';
import {getApiCall, postApiCall} from '../common/Api';

let releaseFormData = require( '../progressForm/datas/ReleaseFormData.js');

export default class ListOfReleases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {releases: [], showAddReleaseForm: false};
    }
	
	componentWillMount() {
		this.getReleaseData();
	}
	
	componentDidMount() {
        this.interval = 2000;
        fetch('http://localhost:8080/RewardsWidgetAPI/releases').then((response) => {
            return response.json();
        }).then((data) => {
			console.log('success');
            this.setState({releases: data._embedded.releases});
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
	
	getReleaseData() {
		const successCallback = (value) => {
		  if (value._embedded) {
			if (value._embedded.releases) {
			  this.setState({releases: value._embedded.releases});
			}
		  }
		};
		const errorCallBack = () => {

		};
		getApiCall('/RewardsWidgetAPI/releases', null, successCallback, errorCallBack);
	}
	
	createNewRelease(value) {
		const successCallback = () => {
		  this.getReleaseData();
		  this.onClosed();
		};
		const errorCallBack = () => {

		};
		postApiCall('/RewardsWidgetAPI/releases', value, successCallback, errorCallBack);
	}
	
	onClosed() {
		this.setState({showAddReleaseForm: false});
	}
	
    render() {
        return (
            <section className="releases">
                <section className="section-content-release">
                    <ShowReleaseCards releases={this.state.releases} showAddReleaseForm={() => (this.setState({showAddReleaseForm: true}))} />
                </section>
				{this.state.showAddReleaseForm && <ProgressForm onClosed={this.onClosed.bind(this)} onSubmitButton={this.createNewRelease.bind(this)} inputDatas={releaseFormData}/>}
            </section>
        );
    }

}
