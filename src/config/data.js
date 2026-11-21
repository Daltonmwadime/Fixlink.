export const CONTACT={whatsapp:'254783855005',display:'0783855005',email:'daltonmwadime137@gmail.com',phone:'0727145158',area:'Nairobi, Kenya',hours:'Monday–Saturday, 8:00 AM–6:00 PM (editable)'};
export const APPLIANCES=['Refrigerator & Freezer','Washing Machine','Dryer','Cooker / Oven','Microwave','Dishwasher','Water Dispenser','Electric Kettle','Air Conditioner','Other Appliance'];
export const BRANDS=['Samsung','LG','Bosch','Whirlpool','Hisense','Ramtons','Mika','Hotpoint','Haier','Midea','Beko','Electrolux','Ariston','Panasonic','Sharp','Siemens','Von','Bruhm','TCL','AEG','Other'];
export const wa=(msg='Hello FixLink, I would like to enquire about appliance repair services.')=>`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
export const mail=(subject,body)=>`mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
