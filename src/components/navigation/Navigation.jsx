import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navigation.css'
import { Icon, Image } from 'semantic-ui-react'
import { MenuData } from '../navigation/MenuItems'

function Navigation() {
    const [click, setClick] = useState(false)
	const closeMobileMenu = () => {
		setClick(false);
		setPreviousStack([]);
		setCurrentMenus(MenuData);
	}
	const [hideMenu, setHideMenu] = useState(false)
	const [previousStack, setPreviousStack] = useState([])
	const [currentMenus, setCurrentMenus] = useState(MenuData)
	const handleClick = () => setClick(!click)
    useEffect(() => {
		const timer = setTimeout(() => {
			setHideMenu(false)
		}, 500)
		return () => {
			clearTimeout(timer)
		}
	}, [hideMenu])

	const renderMenuItems = data => {
		return data.map((item, index) =>
			item?.children && item?.children.length ? (
				<li key={index} className='nav-item'>
					<NavLink to={item.path} className='nav-links' activeClassName='active'>
						{item.title} <Icon name='angle down' />
					</NavLink>
					{!hideMenu && (
						<ul onClick={() => setHideMenu(true)}>
							{renderMenuItems(item.children)}
						</ul>
					)}
				</li>
			) : (
				<li key={index} className='nav-item'>
					<NavLink
						to={item.path}
						exact
						className='nav-links'
						activeClassName='active'
					>
						{item.title}
					</NavLink>
				</li>
			)
		)
	}

	const renderMobileMenuItems = data => {
		return data.map((item, index) =>
			item?.children && item?.children.length ? (
				<Link
					key={index}
					onClick={e => {
						previousStack.push(data)
						setPreviousStack(previousStack)
						setCurrentMenus(item.children)
					}}
					to={'#'}
				>
					{item.title} <Icon name='angle down' />{' '}
				</Link>
			) : (
				<Link key={index} to={item.path} onClick={closeMobileMenu}>
					{item.title}
				</Link>
			)
		)
	}

	return (
		<>
			<div className='navbar'>
				<nav className='menu-icon' onClick={handleClick} style={{ padding: '2px 2px 2px 2px', borderRadius: '3px',}}>
					<Icon name={click ? 'close' : 'sidebar'} />
				</nav>
				<nav className='multilevelMenu hideNav'>
					<ul
						className={
							click ? 'nav-menu active main-navigation' : 'nav-menu main-navigation'
						}
					>
						{renderMenuItems(MenuData)}
					</ul>
				</nav>
				<nav className='multilevelMenu showNav'>
					<ul
						className={
							click ? 'nav-menu active main-navigation' : 'nav-menu main-navigation'
						}
					>
						<Link to={'/'} onClick={closeMobileMenu}>
                			<Image
							src='/images/fullLogoBrandmark.svg'
							className='logo'
							alt='Stylized square, circle, and triangle that represent Designer Space as a logo'
							style={{width: '40vw', height: '40vw', marginLeft: 'auto', marginRight: 'auto'}}
							/> 
						</Link>
						{previousStack.length ? (
							
							<Link
								to={'#'}
								onClick={e => {
									const prevState = previousStack.pop()
									setPreviousStack(previousStack)
									setCurrentMenus(prevState)
								}}
							>
								<Icon name='angle left' /> Back
							</Link>
						) : null}
						{renderMobileMenuItems(currentMenus)}
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Navigation