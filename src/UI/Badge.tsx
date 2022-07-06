import React, {PropsWithChildren} from 'react';
import {ReactComponent as Remove} from '../assets/images/icon-remove.svg';


type BadgeProps = {
	variant?: 'basic' | 'clearable' | 'rounded',
	colorScheme?: 'light' | 'primary' | 'dark',
	onClear?: ()=>void,
	onClick?: ()=>void,
} & PropsWithChildren

const Badge: React.FC<BadgeProps> = ({variant, colorScheme, children, onClear, onClick}) => (
	<div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
    <span>
      {children}
    </span>
		{variant === 'clearable' && (
			<div className='badge-remover' onClick={onClear}>
				<Remove />
			</div>
		)}
	</div>
)

export default Badge;