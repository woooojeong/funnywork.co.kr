import SideNav from '../../components/SideNav';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ESGList from './ESGList';
import ESGIntro from './ESGIntro';
import ESGReport from './ESGReport';
import { motion } from 'framer-motion';

export default function ESGPage() {
  return (
    <Routes>
      <Route path="esg" element={<ESGIntro />} />
      <Route path="esglist" element={<ESGList />} />
      <Route path="report" element={<ESGReport />} />
    </Routes>
  );

}  