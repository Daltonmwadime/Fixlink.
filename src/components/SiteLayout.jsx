import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { wa } from '../config/data';
import Header from './Header';
import Footer from './Footer';

function SiteLayout(){return <><Header/><Outlet/><Footer/><a className="wa-float" href={wa()} target="_blank" rel="noreferrer"><MessageCircle/> <span>Chat with us</span></a></>}
export default SiteLayout;
