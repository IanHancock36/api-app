import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
//
	// I need a mobile close button set to false 
		// I need a handle click set to not false !click
			// this will use the use state open setOpen to false. 

const Navbar = () => {
	const [ open, setOpen ] = useState('false');
	
	const handleOpen = () => {
		setOpen(!open)
	}
	const closeMobile = () => {
		setOpen(false)
	}

	return (
		<div className="navbar">
			<nav>
				<div className="nav-list">
					<ul className={click ? 'nav-options active' : 'nav-options' } >
						<div className="nav-items">
							<li onClick={closeMobile}>
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li onClick={closeMobile}>
								<Link to="/videos" className="nav-link">
									Videos
								</Link>
							</li>
							<li onClick={closeMobile}>
								<Link to="/about" className="nav-link">
									About
								</Link>
							</li>
							<li onClick={closeMobile}>
								<Link to="/contact" className="nav-link">
									Contact
								</Link>
							</li>
							<li onClick={closeMobile}>
								<Link to="/merch" className="nav-link">
									Merch
								</Link>
							</li>
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
