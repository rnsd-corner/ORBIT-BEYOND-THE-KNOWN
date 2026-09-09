export interface Mission {
  id: string;
  code: string;
  name: string;
  year: string;
  status: string;
  description: string;
  accent: 'amber' | 'cyan' | 'mist';
  badge?: string;
}

export interface Discovery {
  id: string;
  ref: string;
  category: string;
  title: string;
  description: string;
  date: string;
  citation: string;
  image: string;
  accent: 'amber' | 'cyan';
  featured?: boolean;
}

export const MISSIONS_DATA: Mission[] = [
  {
    id: 'orbit-01',
    code: 'ORBIT 01',
    name: 'FIRST LIGHT',
    year: '2027',
    status: 'STATUS: COMPLETED // ARCHIVED SPECTRUM CATALOG #001',
    description: 'Suborbital deep array calibration and initial solar exit telemetry. Confirmed high-efficiency magnetoplasma impulse metrics in deep gravitational wells.',
    accent: 'amber'
  },
  {
    id: 'orbit-02',
    code: 'ORBIT 02',
    name: 'LUNAR HORIZON',
    year: '2029',
    status: 'STATUS: OPERATIONAL // CONSTANT SCIENTIFIC RELAY',
    description: 'Permanent farside optical interferometry installation shielding sensitive instruments from terrestrial radio interference.',
    accent: 'cyan'
  },
  {
    id: 'orbit-03',
    code: 'ORBIT 03',
    name: 'RED FRONTIER',
    year: '2032',
    status: 'STATUS: EXTENDED PHASE // BIO-GEOCHEMICAL MAPPING',
    description: 'Autonomous subsurface core drilling on Elysium Planitia, retrieving frozen volatile samples and silicate crystal matrices.',
    accent: 'mist'
  },
  {
    id: 'orbit-04',
    code: 'ORBIT 04',
    name: 'DEEP SIGNAL',
    year: '2036',
    status: 'STATUS: EN ROUTE // TRANSIT CYCLE YEAR 04',
    description: 'Gravitational lensing observatory stationing beyond Kuiper Cliff. Utilization of the Sun\'s focal line to magnify targets at 550 AU.',
    accent: 'amber'
  },
  {
    id: 'orbit-05',
    code: 'ORBIT 05',
    name: 'KEPLER',
    year: '2041',
    status: 'FLAGSHIP INITIATIVE // ACTIVE TRANSMISSION LINK',
    description: 'The primary interstellar reconnaissance initiative targeting exoplanet biospheres. Carries deep-field spectrographic arrays and miniaturized atmospheric landers.',
    accent: 'amber',
    badge: 'LIVE'
  }
];

export const DISCOVERIES_DATA: Discovery[] = [
  {
    id: 'disc-01',
    ref: 'LOG REF // 01',
    category: 'SPECTRAL OBSERVATION',
    title: 'ICE UNDER THE SURFACE',
    description: 'Radar reflections from synthetic aperture sounders confirm cryo-aquifer depth in equatorial highlands. Dielectric constant measurements suggest elevated salinity and geothermal thermal vents beneath basaltic shields.',
    date: '2026.01.14',
    citation: 'DOI-8921.2026',
    image: 'https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1200&auto=format&fit=crop',
    accent: 'amber',
    featured: true
  },
  {
    id: 'disc-02',
    ref: 'LOG REF // 02',
    category: 'RADIO TELEMETRY',
    title: 'A SIGNAL FROM KEPLER',
    description: 'High-gain spectral frequency anomaly detected during perihelion transit. Ultra-narrowband pulses repeated across 4.2 GHz windows, defying ordinary astronomical pulsating models.',
    date: '2026.02.03',
    citation: 'DOSSIER #77-B',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    accent: 'cyan'
  },
  {
    id: 'disc-03',
    ref: 'LOG REF // 03',
    category: 'ATMOSPHERIC DYNAMICS',
    title: 'THE BLUE STORM',
    description: 'Atmospheric vortices spanning 14,000 km captured by ultraviolet spectrographs. Cyclonic shears demonstrate extraordinary Coriolis momentum and metallic crystal clouds.',
    date: '2026.03.18',
    citation: 'SPECTRO-MAP',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000&auto=format&fit=crop',
    accent: 'cyan'
  },
  {
    id: 'disc-04',
    ref: 'LOG REF // 04',
    category: 'ORGANIC CHEMISTRY',
    title: 'AN UNEXPECTED ATMOSPHERE',
    description: 'Trace organohalogen gases detected in secondary transit transmission spectra. Chemical equilibrium suggests ongoing disequilibrium phenomena compatible with prebiotic organic syntheses.',
    date: '2026.04.02',
    citation: 'DOI-9104.2026',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    accent: 'amber',
    featured: true
  }
];

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyOYSvDujp79ZjSc35gOJC2Vkh2Q2SlAFaICE97K-881QyHHYGVJFp3yxgAw2vq3Nvb7ZL-RInQa_fgotoqRc1ZzHCuyluIknFqatjiWpY9En3t423yFfPIbfZnv3x6x2X0TrGKw8bmIhnDZv4yViQhK9VjE0l8t6vGUUWViZsYQqZGxAua_MZ9KCej1vzydjzO6QaUgIWBghECw-ncPnRGBnRm_LHzxXHB0plYkjfo3CUeIzeNccn',
  featuredWorld: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANZCkLdoeEpR7f17De3gUXR5hRkc6ntjdWZ4SFRhy5R4Jqj3_gc6DixjoIsNbbLMPC2_x0s1b50ssDz-2tZzmitNvFNhym_AczkHi528wTBNklvtrH8sXutl9YbfLmtwypGF1v1Wau8dehy_gQ74OBsjVYuIoEx4uuGXDBAb41IpBZMierHtCWYkIR-FyOle31ySlATeMR2KcoRcVesC92f_KgaT7Zw0oswgRTYEev1wbMqYXYXQ4s',
  spacecraft: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCScL5wLV50GuC-7Xndb7bd9Wwd0sijOLYfrrIOAJ02Ap3oUdgaRahsmGmvh2y1xAA8YqTg0LUthWbuomYevBqmvrgunSJwRWfMDn0AL-Uz-5Ouht4fuPxrQ8ramao658OymTP5-e-SToWFkwjLnyECkBbt7aQZbMsbipBqfuiMtJ8pXq0mUqF8x-XFslZY_dssR-HU9_2VuxrLQXeBamqq-z7acD-o8dDKR7lrhJ_Fj2nhVvVMgnoO',
  cinematicBreak: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaEG4IJhj7omLkw_J9RtipLR4uI8bl_g4WJCBg--7vr-fGOMjHNPADU6nJXRkg64F6LF1CTjx6NUnAoEjhDFrQW55QmCjr-2dOeko4tjCzngqbGGhqoNqJ8o7D7DjHga8TXD0TtPI9w1dhNsOppyZiwmSiBqWRv2FItdC_hLJntdBZ0c3fDFClQbJeX8yEC102ox8-tzpwTHngctQsigqsfhqu0vnCbFoQ3dtvJ-b_ghYL6zK-fzKc'
};
