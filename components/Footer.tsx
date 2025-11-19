export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white py-12 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">COLAB 91</h3>
            <p className="text-sm opacity-80">SUM OF PARTS</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Email</li>
              <li>Phone</li>
              <li>Address</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 COLAB 91. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

