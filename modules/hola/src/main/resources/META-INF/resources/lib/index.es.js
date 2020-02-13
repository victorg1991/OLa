import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item.es';

const Bug = () => <Item />;

export default function(elementId) {
	ReactDOM.render(<Bug />, document.getElementById(elementId));
}
