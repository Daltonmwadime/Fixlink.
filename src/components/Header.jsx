import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header(){const[open,setOpen]=useState(false);return <header className="header"><div className="wrap nav"><Link to="/"><img className="logo" src="/images/fixlink-logo.png" alt="FixLink logo"/></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'links open':'links'}>{[['Home','/'],['Services','/services'],['Book a Repair','/book'],['Contact','/contact'],['Become a Technician','/technician']].map(([n,p])=><NavLink key={p} to={p} onClick={()=>setOpen(false)}>{n}</NavLink>)}<Link className="btn small" to="/book">Book Now</Link></nav></div></header>}
export default Header;
