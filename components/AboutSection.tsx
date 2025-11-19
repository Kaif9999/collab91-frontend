export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-blue-900 leading-relaxed">
              Content placeholder - will be updated based on Figma design
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg">
            {/* Image or content placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

