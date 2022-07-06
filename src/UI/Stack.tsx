import React, {PropsWithChildren} from 'react';

type StackProps = {
	pos?: 'center' | 'end' | 'start'
} & PropsWithChildren

const Stack: React.FC<StackProps> = ({children,pos}) => (
	<div className='stack' style={{
		justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
	}}>
		{children}
	</div>
);

export default Stack;