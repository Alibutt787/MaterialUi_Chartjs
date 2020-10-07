import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [100, 300, 600],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default function bubb () {
    return (
        <div>
             <h2><b><i>Pie Chart</i></b></h2>
        <Pie data={data}  height={20} width={100}/>
        </div>
    )
}
