import ServiceView from "./_components/service-view";
import { getAllServices } from "./_data/data";

export default function ServicesPage() {
  const services = getAllServices();

  return <ServiceView services={services} />;
}
