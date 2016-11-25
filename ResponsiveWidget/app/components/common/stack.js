import React from 'react';
import { ReleaseStack, Release } from '../release/Release';

export default class Stack extends React.Component {

    render() {
        const items = this.props.items || [];
		const ItemType = this.props.itemType;
        const markupItems = this.createItemsMarkup(items,ItemType);
        return (	<div className="ui attached segment">
				<div className="ui middle aligned column centered grid">
					<div className="left floated six wide column">
					<div className="ui header">Release schedule:</div>
				</div>
				</div>
				<div className="ui divider"></div>
				<ReleaseStack height={300}
		width={400}
		background='black'
	  hoverOffset={25} >{markupItems}</ReleaseStack></div>);
    }

    createItemsMarkup(items, Type) {
	    const background_colors = ['#2980B9', '#27AE60', '#9B27AE', '#e67e22'];  
	    let i=0;
        const markupItems = (items).map(item => {
                                             const color = background_colors[i % 4];
                                             i++;
											 console.log(color);
                                             return (
                                                            <Release background={color} key={item.releaseNumber} >
                                                                           <h1>{item.releaseNumber}</h1>
																		   <Type data={item}/>
                                                            </Release>
                                             );
                              });

        return markupItems;
    }
}
