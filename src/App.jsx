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
import AsphaltAmericanSpecsPlant from "./pages/gallery/AsphaltAmericanSpecs.jsx";
import AsphaltDrumMixPlant from "./pages/gallery/AsphaltDrumMix.jsx";
import MobileAsphaltMixingPlant from "./pages/gallery/MobileAsphaltMixingPlant.jsx";
import MobileHotMixPlant from "./pages/gallery/MobileHotMmixPlant.jsx";
import InlineConcretePlants from "./pages/gallery/InlineConcretePlant.jsx";
import CompactConcretePlants from "./pages/gallery/CompactConcretePlant.jsx";
import ContainerisedConcretePlant from "./pages/gallery/ContainerisedConcretePlant.jsx";
import MobileConcretePlants from "./pages/gallery/MobileConcretePlant.jsx";
import ConcreteConveyor from "./pages/gallery/ConcreteConveyor.jsx";
import RoadRollers from "./pages/gallery/RoadRoller.jsx";
import PaverFinishers from "./pages/gallery/PaverFinisher.jsx";
import RoadSweepers from "./pages/gallery/RoadSweeper.jsx";
import ChipSpreaders from "./pages/gallery/ChipSpreader.jsx";
import BitumenPressureDistributor from "./pages/gallery/BitumenPressureDistributor.jsx";
import TrolleyMountedBitumenSprayer from "./pages/gallery/TrolleyMountedBitumenSprayer.jsx";
import BitumenDecanters from "./pages/gallery/BitumenDecanter.jsx";
import PotholeRepairingMachine from "./pages/gallery/PotholeRepairingMachine.jsx";
import WetMixMacadamPlant from "./pages/gallery/WetMixMacadamPlant.jsx";

import Exhibitions from "./pages/gallery/Exhibitions.jsx";
import ClientsVisit from "./pages/gallery/ClientsVisit.jsx";
import Despatch from "./pages/gallery/Despatch.jsx";
import PortStuffing from "./pages/gallery/PortStuffing.jsx";
import Videos from "./pages/gallery/Videos.jsx";

import ForBuyers from "./pages/Information/ForBuyers.jsx";
import ForCompetitors from "./pages/Information/ForCompetitors.jsx";

import Dealership from "./pages/Business/Dealership.jsx";
import JointVenture from "./pages/Business/JointVenture.jsx"
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
        <Route path="/product-gallery/asphalt-drum-mix-plant-international-specs" element={<AsphaltDrumMixPlant/>}/>
        <Route path="/product-gallery/asphalt-drum-mix-plant-american-specs" element={<AsphaltAmericanSpecsPlant/>}/>
        <Route path="/product-gallery/mobile-asphalt-mixing-plant" element={<MobileAsphaltMixingPlant/>}/>
        <Route path="/product-gallery/mobile-hot-mix-plant" element={<MobileHotMixPlant/>}/>
        <Route path="/product-gallery/inline-concrete-batching-plant" element={<InlineConcretePlants/>}/>
        <Route path="/product-gallery/compact-concrete-plant" element={<CompactConcretePlants/>}/>
        <Route path="/product-gallery/containerised-concrete-plant" element={<ContainerisedConcretePlant/>}/>
        <Route path="/product-gallery/mobile-concrete-plant" element={<MobileConcretePlants/>}/>
        <Route path="/product-gallery/concrete-conveyor" element={<ConcreteConveyor/>}/>
        <Route path="/product-gallery/road-rollers" element={<RoadRollers/>}/>
        <Route path="/product-gallery/paver-finishers" element={<PaverFinishers/>}/>
        <Route path="/product-gallery/road-sweepers" element={<RoadSweepers/>}/>
        <Route path="/product-gallery/chip-spreaders" element={<ChipSpreaders/>}/>
        <Route path="/product-gallery/bitumen-pressure-distributor" element={<BitumenPressureDistributor/>}/>
        <Route path="/product-gallery/trolley-mounted-bitumen-sprayer" element={<TrolleyMountedBitumenSprayer/>}/>
        <Route path="/product-gallery/bitumen-decanter" element={<BitumenDecanters/>}/>
        <Route path="/product-gallery/pothole-repairing-machine" element={<PotholeRepairingMachine/>}/>
        <Route path="/product-gallery/wet-mix-macadam-plant" element={<WetMixMacadamPlant/>}/>
        
       <Route path="/gallery/exhibitions" element={<Exhibitions/>} />
       <Route path="/gallery/clients-visit" element={<ClientsVisit/>} />
       <Route path="/gallery/despatch" element={<Despatch/>} />
       <Route path="/gallery/port-stuffing" element={<PortStuffing/>} />
       <Route path="/gallery/videos" element={<Videos/>} />

       <Route path="/information/for-buyers" element={<ForBuyers/>} />
       <Route path="/information/for-competitors" element={<ForCompetitors/>} />

       <Route path="/business/dealership" element={<Dealership/>} />
       <Route path="/business/joint-venture-collaboration" element={<JointVenture/>} />

       <Route path="/career" element={<Career />} />
       <Route path="/contact" element={<Contact />} />

       <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
