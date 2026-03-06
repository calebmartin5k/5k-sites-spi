export default function Footer() {
  return (
    <footer className="bg-spi-dark border-t border-spi-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://specialprojects.com/themes/special-projects/assets/images/spi-logo.png" 
                alt="Special Projects International" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-spi-muted text-sm max-w-sm mb-6">
              Quality Used Packaging and Processing Equipment - since 1986.
            </p>
            <a 
              href="https://www.ebay.com/str/specialprojectsinternationalinc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-spi-red hover:text-white transition-colors uppercase tracking-widest"
            >
              Visit our eBay Store ▶
            </a>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6 border-b border-spi-border pb-4">Visit Us</h4>
            <address className="not-italic text-sm text-spi-muted flex flex-col gap-2">
              <span>Special Projects International, Inc.</span>
              <span>1720 West Lee Street</span>
              <span>Louisville, KY 40210</span>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6 border-b border-spi-border pb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-spi-muted">
              <a href="tel:502-778-3883" className="hover:text-spi-red transition-colors">Phone: 502-778-3883</a>
              <a href="mailto:sales@specialprojects.com" className="hover:text-spi-red transition-colors">Email: sales@specialprojects.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-spi-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-spi-muted font-mono">
            © 2026 Special Projects International Inc.
          </p>
          <div className="flex gap-6 text-xs text-spi-muted font-mono uppercase tracking-widest">
            <a href="/terms-and-conditions" className="hover:text-spi-red transition-colors">Our Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
