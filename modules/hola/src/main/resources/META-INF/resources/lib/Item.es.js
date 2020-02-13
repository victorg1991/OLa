import NestedItem from './NestedItem.es';
import React from 'react';

export default function Item({renderNestedItem = true}) {
	return (
		<>
			<h1>Item</h1>
			{renderNestedItem && <NestedItem />}
		</>
	);
}
