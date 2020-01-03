import React, { useState } from 'react';
import cx from 'classnames';

import s from './styles.module.scss';

const ExtendedAbout = ({ about }) => {
	const [ isOpen, setOpen ] = useState(false);

	return (
		<div className={s.container}>
			<div onClick={() => setOpen(!isOpen)} className={cx({[s.arrowUp]: isOpen, [s.toggle]: true})}>
				<div className={s.imgWrapper}>
					<img src={require('src/img/arrowDown.svg')} alt=""/>
				</div>
				<div className={s.text}>
					Подробнее об услуге
				</div>
			</div>
			{isOpen &&
				<>
					<div className={s.about} dangerouslySetInnerHTML={{__html: about}} />
					<div 
						onClick={() => setOpen(!isOpen)} 
						className={cx({[s.arrowUp]: isOpen, [s.toggle]: true})}
						style={{marginTop: '20px'}}
					>
						<div className={s.imgWrapper}>
							<img src={require('src/img/arrowDown.svg')} alt=""/>
						</div>
						<div className={s.text}>
							Подробнее об услуге
						</div>
					</div>
				</>
			}
		</div>
	)
}

export default ExtendedAbout;
