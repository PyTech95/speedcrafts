import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Career from "./pages/Career.jsx";
import NotFound from "./pages/NotFound.jsx";

// About
import CompanyProfile from "./pages/about/CompanyProfile.jsx";
import Founder from "./pages/about/Founder.jsx";
import ChairmanMessage from "./pages/about/ChairmanMessage.jsx";
import BoardOfDirectors from "./pages/about/BoardOfDirectors.jsx";
import Infrastructure from "./pages/about/Infrastructure.jsx";
import MissionVisionValues from "./pages/about/MissionVisionValues.jsx";
import QualityPolicy from "./pages/about/QualityPolicy.jsx";
import Certifications from "./pages/about/Certifications.jsx";
import NewsEvents from "./pages/about/NewsEvents.jsx";

// Products detail
import AsphaltBatchMix from "./pages/products/AsphaltBatchMix.jsx";
import AsphaltDrumMix from "./pages/products/AsphaltDrumMix.jsx";
import AsphaltAmericanSpecs from "./pages/products/AsphaltAmericanSpecs.jsx";
import MobileAsphaltMixing from "./pages/products/MobileAsphaltMixing.jsx";
import MobileHotMix from "./pages/products/MobileHotMix.jsx";
import InlineConcretePlant from "./pages/products/InlineConcretePlant.jsx";
import CompactConcretePlant from "./pages/products/CompactConcretePlant.jsx";
import PortableConcretePlant from "./pages/products/PortableConcretePlant.jsx";
import MobileConcretePlant from "./pages/products/MobileConcretePlant.jsx";
import RoadRoller from "./pages/products/RoadRoller.jsx";
import PaverFinisher from "./pages/products/PaverFinisher.jsx";
import RoadSweeper from "./pages/products/RoadSweeper.jsx";
import ChipSpreader from "./pages/products/ChipSpreader.jsx";
import BitumenPressure from "./pages/products/BitumenPressure.jsx";
import BitumenSprayer from "./pages/products/BitumenSprayer.jsx";
import BitumenDecanter from "./pages/products/BitumenDecanter.jsx";
import WetMixMacadam from "./pages/products/WetMixMacadam.jsx";
import PotholeRepairing from "./pages/products/PotholeRepairing.jsx";

import Products from "./pages/gallery/products.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about/company-profile" element={<CompanyProfile />} />
        <Route path="/about/founder" element={<Founder />} />
        <Route path="/about/chairman-message" element={<ChairmanMessage />} />
        <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/about/infrastructure" element={<Infrastructure />} />
        <Route path="/about/mission-vision-values" element={<MissionVisionValues />} />
        <Route path="/about/quality-policy" element={<QualityPolicy />} />
        <Route path="/about/certifications" element={<Certifications />} />
        <Route path="/about/news-events" element={<NewsEvents />} />

        <Route path="/products/asphalt-batch-mix" element={<AsphaltBatchMix />} />
        <Route path="/products/asphalt-drum-mix" element={<AsphaltDrumMix />} />
        <Route path="/products/asphalt-american-specs" element={<AsphaltAmericanSpecs />} />
        <Route path="/products/mobile-asphalt-mixing" element={<MobileAsphaltMixing />} />
        <Route path="/products/mobile-hot-mix" element={<MobileHotMix />} />
        <Route path="/products/concrete-batching-plant" element={<InlineConcretePlant />} />
        <Route path="/products/compact-concrete-plant" element={<CompactConcretePlant />} />
        <Route path="/products/portable-concrete-plant" element={<PortableConcretePlant/>}/>
        <Route path="/products/portable-concrete-plant" element={<PortableConcretePlant/>}/>
        <Route path="/products/mobile-concrete-plant" element={<MobileConcretePlant/>}/>
        <Route path="/products/road-roller" element={<RoadRoller/>}/>
        <Route path="/products/paver-finisher" element={<PaverFinisher/>}/>
        <Route path="/products/Road-Sweeper" element={<RoadSweeper/>}/>
        <Route path="/products/Chip-Spreader" element={<ChipSpreader/>}/>
        <Route path="/products/Bitumen-Pressure" element={<BitumenPressure/>}/>
        <Route path="/products/Bitumen-Sprayer" element={<BitumenSprayer/>}/>
        <Route path="/products/Bitumen-Decanter" element={<BitumenDecanter/>}/>
        <Route path="/products/Wet-Mix-Macadam" element={<WetMixMacadam/>}/>
        <Route path="/products/Pothole-Repairing" element={<PotholeRepairing/>}/>

        <Route path="/gallery/Products" element={<Products/>}/>

        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
