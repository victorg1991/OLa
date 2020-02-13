import Item from './Item.es';
import React from 'react';

export default function NestedItem() {
	return (
		<>
			<h1>NestedItem</h1>
			<Item renderNestedItem={false} />
		</>
	);
}
