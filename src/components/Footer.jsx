import { Link } from 'react-router-dom';
import { CONTACT } from '../config/data';

function Footer(){return <footer><div className="wrap foot"><div><b className="footlogo">Fix<span>Link</span></b><p>Appliance repair, connected.</p></div><div><b>Explore</b><Link to="/services">Services</Link><Link to="/book">Book a repair</Link><Link to="/technician">Join as technician</Link></div><div><b>Contact</b><a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><span>{CONTACT.area}</span></div></div><div className="wrap copyright">© {new Date().getFullYear()} FixLink. All rights reserved.</div></footer>}
export default Footer;
