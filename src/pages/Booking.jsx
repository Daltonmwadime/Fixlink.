import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CONTACT, APPLIANCES, BRANDS, wa, mail } from '../config/data';
import { submitBooking } from '../services/bookingService';
import Intro from '../components/Intro';

function Booking() {
  const [f, S] = useState({
      name: '',
      phone: '',
      email: '',
      location: '',
      appliance: '',
      brand: '',
      model: '',
      problem: '',
      date: '',
      time: ''
    }),
    [err, E] = useState({}),
    [msg, M] = useState('');

  const change = e => S({ ...f, [e.target.name]: e.target.value });

  function submit(e) {
    e.preventDefault();
    let x = {};
    ['name', 'phone', 'location', 'appliance', 'brand', 'problem', 'date', 'time'].forEach(k => {
      if (!f[k].trim()) x[k] = 'Required';
    });
    if (f.phone && !/^(?:\+?254|0)?[17]\d{8}$/.test(f.phone.replace(/[\s-]/g, '')))
      x.phone = 'Enter a valid Kenyan number';
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email';
    if (f.date && f.date < new Date().toISOString().slice(0, 10))
      x.date = 'Choose today or a future date';
    E(x);
    if (!Object.keys(x).length) {
      submitBooking(f);
      M(
        `Hello FixLink, I would like to request an appliance repair.\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || 'Not provided'}\nLocation: ${f.location}\nAppliance: ${f.appliance}\nBrand: ${f.brand}\nModel: ${f.model || 'Not provided'}\nProblem: ${f.problem}\nPreferred date: ${f.date}\nPreferred time: ${f.time}`
      );
    }
  }

  const field = (k, label, type = 'text', optional = false) => (
    <label className="field">
      {label}
      {!optional && ' *'}
      <input name={k} type={type} value={f[k]} onChange={change} />
      {err[k] && <i>{err[k]}</i>}
    </label>
  );

  return (
    <>
      <Intro
        tag="BOOK A REPAIR"
        title="Request an appliance technician"
        desc="Complete the form and send your details to FixLink using WhatsApp or email."
      />
      <section className="section wrap form-layout">
        <form className="form" onSubmit={submit}>
          <h2>Repair request details</h2>
          <div className="formgrid">
            {field('name', 'Full name')}
            {field('phone', 'Phone number', 'tel')}
            {field('email', 'Email address', 'email', true)}
            {field('location', 'Location / estate')}
            <label className="field">
              Appliance category *
              <select name="appliance" value={f.appliance} onChange={change}>
                <option value="">Choose appliance</option>
                {APPLIANCES.map(a => (
                  <option>{a}</option>
                ))}
              </select>
              {err.appliance && <i>Required</i>}
            </label>
            <label className="field">
              Appliance brand *
              <select name="brand" value={f.brand} onChange={change}>
                <option value="">Choose brand</option>
                {BRANDS.map(b => (
                  <option>{b}</option>
                ))}
              </select>
              {err.brand && <i>Required</i>}
            </label>
            {field('model', 'Model (optional)', 'text', true)}
            {field('date', 'Preferred date', 'date')}
            {field('time', 'Preferred time', 'time')}
            <label className="field full">
              Describe the problem *
              <textarea name="problem" rows="4" value={f.problem} onChange={change} />
              {err.problem && <i>Required</i>}
            </label>
          </div>
          <button className="btn fullbtn">Prepare booking message</button>
          {msg && (
            <div className="success">
              <CheckCircle2 />
              <div>
                <b>Message prepared — not a confirmed booking.</b>
                <p>Send the message and wait for FixLink to confirm availability.</p>
                <a className="btn" target="_blank" rel="noreferrer" href={wa(msg)}>
                  Send via WhatsApp
                </a>{' '}
                <a
                  className="btn outline"
                  href={mail('FixLink appliance repair request', msg)}
                >
                  Open Gmail
                </a>
              </div>
            </div>
          )}
        </form>
        <aside className="aside">
          <img src="/images/technician-tools.png" alt="Technician with tools" />
          <h3>Need to speak to us?</h3>
          <p>Call {CONTACT.phone} or message FixLink on WhatsApp.</p>
          <a href={`tel:${CONTACT.phone}`}>Call FixLink</a>
        </aside>
      </section>
    </>
  );
}
export default Booking;



