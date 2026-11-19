import { Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Technician from './pages/Technician';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App(){return <Routes><Route element={<SiteLayout/>}><Route index element={<Home/>}/><Route path="services" element={<Services/>}/><Route path="book" element={<Booking/>}/><Route path="technician" element={<Technician/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>}
