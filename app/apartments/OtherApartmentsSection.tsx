import OtherApartmentCard from "./OtherApartmentCard";
import { otherApartments } from "./apartments";

export default function OtherApartmentsSection() {
  return (
    <section className="py-12">
      <div className="screen-container">
        <h2 className="text-2xl font-bold mb-6">Explore Other Apartments</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {otherApartments.map((apt) => (
            <OtherApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </div>
    </section>
  );
}
