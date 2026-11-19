import { useState } from 'react';
import { APPLIANCES, BRANDS } from '../config/data';
import { saveTechnician } from '../services/technicianService';
import Intro from '../components/Intro';


function Technician() {
  const [f, S] = useState({
      name: '',
      phone: '',
      email: '',
      location: '',
      experience: '',
      bio: '',
      specialty: [],
      appliances: [],
      brands: []
    }),
    [photo, P] = useState(''),
    [docs, D] = useState([]),
    [status, T] = useState(''),
    [error, E] = useState('');

  const ch = e => S({ ...f, [e.target.name]: e.target.value });

  const toggle = (key, v) =>
    S(old => ({
      ...old,
      [key]: old[key].includes(v)
        ? old[key].filter(x => x !== v)
        : [...old[key], v]
    }));

  async function submit(e) {
    e.preventDefault();
    if (
      !f.name ||
      !f.phone ||
      !f.email ||
      !f.location ||
      !f.experience ||
      !f.specialty.length ||
      !f.appliances.length
    ) {
      E('Complete required fields and select at least one specialty and appliance.');
      return;
    }
    if (
      !/^(?:\+?254|0)?[17]\d{8}$/.test(f.phone.replace(/[\s-]/g, '')) ||
      !/^\S+@\S+\.\S+$/.test(f.email)
    ) {
      E('Check your phone number and email address.');
      return;
    }
    try {
      await saveTechnician({ ...f, photoFilename: photo, documentFilenames: docs });
      T('Saved in this browser only. FixLink has not received this application.');
      E('');
    } catch {
      E('Unable to save in browser storage.');
    }
  }

  const group = (label, key, items) => (
    <fieldset>
      <legend>{label} *</legend>
      <div className="checks">
        {items.map(v => (
          <label key={v}>
            <input
              type="checkbox"
              checked={f[key].includes(v)}
              onChange={() => toggle(key, v)}
            />
            {v}
          </label>
        ))}
      </div>
    </fieldset>
  );

  return (
    <>
      <Intro
        tag="JOIN THE NETWORK"
        title="Become a FixLink technician"
        desc="Share your skills and experience. This frontend-only form stores a limited application record in this browser."
      />
      <section className="section wrap">
        <form className="form techform" onSubmit={submit}>
          <h2>Technician application</h2>
          <div className="formgrid">
            {[
              ['name', 'Full name', 'text'],
              ['phone', 'Phone number', 'tel'],
              ['email', 'Email address', 'email'],
              ['location', 'Location / service area', 'text']
            ].map(([k, l, t]) => (
              <label className="field">
                {l} *
                <input name={k} type={t} value={f[k]} onChange={ch} />
              </label>
            ))}
            <label className="field">
              Years of experience *
              <select name="experience" value={f.experience} onChange={ch}>
                <option value="">Select experience</option>
                {[
                  'Less than 1 year',
                  '1–2 years',
                  '3–5 years',
                  '6–10 years',
                  '10+ years'
                ].map(x => (
                  <option>{x}</option>
                ))}
              </select>
            </label>
            <label className="field">
              Profile photograph
              <input
                type="file"
                accept="image/*"
                onChange={e => P(e.target.files?.[0]?.name || '')}
              />
              <small>{photo}</small>
            </label>
            <label className="field full">
              Professional biography
              <textarea name="bio" rows="3" value={f.bio} onChange={ch} />
            </label>
          </div>
          {group('Technical specialties', 'specialty', [
            'Electrical diagnostics',
            'Mechanical repairs',
            'Installation',
            'Maintenance',
            'Cooling systems',
            'General appliance repair'
          ])}
          {group('Appliances you repair', 'appliances', APPLIANCES)}
          {group('Brands you work with', 'brands', BRANDS)}
          <label className="field">
            Certificates / training documents (optional)
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={e => D(Array.from(e.target.files || []).map(x => x.name))}
            />
            <small>Selected filenames: {docs.join(', ') || 'None'}</small>
          </label>
          <div className="notice">
            <b>Storage and privacy notice</b>
            <p>
              Application text is saved in this browser's LocalStorage only. It is not
              sent to a server or visible to FixLink administrators. Selected documents
              are not uploaded; only their filenames are recorded. Do not submit
              passwords or sensitive identity-document data.
            </p>
          </div>
          {error && <p className="error">{error}</p>}
          {status && <p className="success">{status}</p>}
          <button className="btn fullbtn">Save application locally</button>
        </form>
      </section>
    </>
  );
}
export default Technician;