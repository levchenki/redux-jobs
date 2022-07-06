import React, {PropsWithChildren} from 'react';

type CardProps = {
	isFeatured?: boolean,
	className?: string,
} & PropsWithChildren

const Card: React.FC<CardProps> = ({children, isFeatured, className}) => (
	<div
		className={
			`card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
		}
	>
		{children}
	</div>
)
export default Card;