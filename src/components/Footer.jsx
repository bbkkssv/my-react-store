import { IconMapPin, IconPhone } from '@tabler/icons-react';

// Footer component
function Footer() {
  return (
    <footer className="bg-white border-top-wa-green py-4 mt-auto shadow-sm">
      <div className="container">
        <div className="text-center">
          <p className="mb-2 fw-semibold text-wa-brown">Whispering Acres - Long Term RV Campground</p>
          <div className="d-flex justify-content-center gap-4 mb-2 small text-muted">
            <span className="d-flex align-items-center gap-1">
              <IconMapPin size={16} stroke={2} />
              Oregon, USA
            </span>
            <span className="d-flex align-items-center gap-1">
              <IconPhone size={16} stroke={2} />
              (847) 341-2166
            </span>
          </div>
          <p className="mb-0 small text-muted">© 2025 Whispering Acres. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;