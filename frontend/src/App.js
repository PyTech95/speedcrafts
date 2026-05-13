import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import FounderPage from "./pages/FounderPage";
import ChairmansMessagePage from "./pages/ChairmansMessagePage";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import MissionVisionPage from "./pages/MissionVisionPage";
import QualityPolicyPage from "./pages/QualityPolicyPage";
import MembershipCertificationsPage from "./pages/MembershipCertificationsPage";
import AwardsPage from "./pages/AwardsPage";
import ProductsListPage from "./pages/ProductsListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PlantPhotosPage from "./pages/PlantPhotosPage";
import {
  GalleryProductsPage,
  GalleryClientsVisitPage,
  GalleryDespatchPage,
  GalleryPortStuffingPage
} from "./pages/GalleryPages";
import ExhibitionsPage from "./pages/ExhibitionsPage";
import VideosPage from "./pages/VideosPage";
import BrochuresPage from "./pages/BrochuresPage";
import NewsPage from "./pages/NewsPage";
import BlogPage from "./pages/BlogPage";
import ForBuyersPage from "./pages/ForBuyersPage";
import ForCompetitorsPage from "./pages/ForCompetitorsPage";
import DealersPage from "./pages/DealersPage";
import SparesPage from "./pages/SparesPage";
import ServicePage from "./pages/ServicePage";
import DealershipPage from "./pages/DealershipPage";
import JointVenturePage from "./pages/JointVenturePage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import {
  GalleryHubPage,
  InformationHubPage,
  BusinessHubPage
} from "./pages/HubPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/company-profile" element={<CompanyProfilePage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/chairmans-message" element={<ChairmansMessagePage />} />
          <Route path="/board-of-directors" element={<BoardOfDirectorsPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/mission-vision" element={<MissionVisionPage />} />
          <Route path="/quality-policy" element={<QualityPolicyPage />} />
          <Route path="/membership-certifications" element={<MembershipCertificationsPage />} />
          <Route path="/awards" element={<AwardsPage />} />

          {/* Products */}
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />

          {/* Gallery */}
          <Route path="/gallery" element={<GalleryHubPage />} />
          <Route path="/gallery/products" element={<GalleryProductsPage />} />
          <Route path="/gallery/plant-photos" element={<PlantPhotosPage />} />
          <Route path="/gallery/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/gallery/clients-visit" element={<GalleryClientsVisitPage />} />
          <Route path="/gallery/despatch" element={<GalleryDespatchPage />} />
          <Route path="/gallery/port-stuffing" element={<GalleryPortStuffingPage />} />
          <Route path="/gallery/videos" element={<VideosPage />} />

          {/* Information */}
          <Route path="/information" element={<InformationHubPage />} />
          <Route path="/information/for-buyers" element={<ForBuyersPage />} />
          <Route path="/information/for-competitors" element={<ForCompetitorsPage />} />
          <Route path="/information/brochures" element={<BrochuresPage />} />
          <Route path="/information/news" element={<NewsPage />} />
          <Route path="/information/blog" element={<BlogPage />} />

          {/* Business */}
          <Route path="/business" element={<BusinessHubPage />} />
          <Route path="/business/dealership" element={<DealershipPage />} />
          <Route path="/business/joint-venture" element={<JointVenturePage />} />
          <Route path="/business/dealers" element={<DealersPage />} />
          <Route path="/business/spares" element={<SparesPage />} />
          <Route path="/business/service" element={<ServicePage />} />

          {/* Career & Contact */}
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
