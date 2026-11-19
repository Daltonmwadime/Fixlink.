import { Link } from 'react-router-dom';
import { APPLIANCES } from '../config/data';
import Intro from '../components/Intro';

function Services(){return <><Intro tag="FIXLINK SERVICES" title="Appliance repair services" desc="Choose the appliance you need help with. Share the details and we will follow up about your request."/><section className="section wrap"><div className="cards">{APPLIANCES.map((a,i)=><article className="card service" key={a}><span className="symbol">{['▣','◉','◌','♨','▤','≈','◍','♨','✥','⚒'][i]}</span><div><h3>{a}</h3><p>Diagnostics, repair and maintenance enquiries.
</p></div><Link className="textlink" to="/book">Book →</Link></article>)}</div></section></>}
export default Services;
