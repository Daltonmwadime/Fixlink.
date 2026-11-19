# FixLink frontend
React + Vite frontend for the FixLink appliance repair marketplace. No backend is included.

## Run
1. Install Node.js 18.18+ (Node 20 LTS recommended).
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` to create a production build.

## Included
- Responsive home, services, booking, technician registration and contact pages.
- Booking/contact forms prepare WhatsApp and prefilled email messages.
- Technician application text is saved to this browser's LocalStorage only.
- File inputs display selected filenames; files are not uploaded or stored.
- Floating WhatsApp contact link on every page.

## Important limitations
Opening WhatsApp or Gmail does not submit a booking. The customer must send the message and FixLink must confirm availability. Technician records are local to this browser and are not available to administrators or other users. Do not store passwords or sensitive identity-document information in LocalStorage. Frontend validation is not a substitute for backend security. Testimonials have not been fabricated; add verified customer reviews only after obtaining permission. Confirm business hours and service coverage before launch.

## Configuration
Edit `src/data.js` to change FixLink contact details, appliance categories and brands. `src/services.js` contains the future backend integration points.


## Organized source folders

```text
src/
├── components/       # Shared layout and reusable UI components
├── pages/            # One file per route/page
├── config/           # FixLink contact details and shared lists
├── services/         # Browser storage and future API integration
├── styles/           # Global CSS
├── App.jsx           # Route definitions only
└── main.jsx          # React application entry point
```

### Where to make changes
- Update contact details, appliance categories, and brands in `src/config/data.js`.
- Edit page content in the matching file under `src/pages/`.
- Edit the shared header, footer, or page intro in `src/components/`.
- Keep browser storage and future backend calls in `src/services/`.
- Edit global styling in `src/styles/style.css`.

The frontend behavior and existing assets are retained. The technician form still stores only text and selected filenames in this browser; it does not upload documents or submit applications to a server. Booking messages still require the customer to send them and FixLink to confirm availability.
