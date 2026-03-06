import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, X } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-spi-dark text-spi-text selection:bg-spi-red selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Breadcrumb replacement / Header */}
          <div className="mb-12 border-b border-spi-border pb-6">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              Contact <span className="text-spi-border">Us</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column - Form */}
            <div className="lg:col-span-7">
              {/* Quote Items Box */}
              <div className="bg-spi-surface border border-spi-border p-6 mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-spi-red"></div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">Items for Quote:</h3>
                </div>
                <p className="text-spi-muted text-sm mb-4 border-b border-spi-border pb-4">
                  Fill out form below to request quote
                </p>
                <div className="bg-spi-dark border border-dashed border-spi-border p-4 text-center text-spi-muted font-mono text-sm">
                  No Items To Quote
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-spi-surface border border-spi-border p-8 relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-spi-red to-transparent"></div>
                <h4 className="font-mono text-sm text-spi-red uppercase tracking-widest mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 bg-spi-red rounded-sm"></span>
                  Contact Information
                </h4>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                        First name <span className="text-spi-red">*</span>
                      </label>
                      <input type="text" name="first_name" required className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="First name" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                        Last name <span className="text-spi-red">*</span>
                      </label>
                      <input type="text" name="last_name" required className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="Last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                        Email <span className="text-spi-red">*</span>
                      </label>
                      <input type="email" name="email" required className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="Email" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                        Company name <span className="text-spi-red">*</span>
                      </label>
                      <input type="text" name="company_name" required className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="Company name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                      Phone <span className="text-spi-red">*</span>
                    </label>
                    <input type="tel" name="phone" required className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="Phone" />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                      Address
                    </label>
                    <input type="text" name="address" className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="Address" />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                      Address 2 (optional)
                    </label>
                    <input type="text" name="address_2" className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="Address 2" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                        City
                      </label>
                      <input type="text" name="city" className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="City" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                        State
                      </label>
                      <input type="text" name="state" className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="State" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                        Postal code
                      </label>
                      <input type="text" name="postal_code" className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="Postal code" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                        Country
                      </label>
                      <input type="text" name="country" className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors" placeholder="Country" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-spi-muted uppercase tracking-widest mb-2">
                      Comments
                    </label>
                    <textarea name="comment" rows={5} className="w-full bg-spi-dark border border-spi-border px-4 py-3 text-white focus:outline-none focus:border-spi-red transition-colors resize-none" placeholder="Comments"></textarea>
                  </div>

                  {/* Note: Placeholder for Google Recaptcha */}
                  <div className="bg-spi-dark border border-spi-border p-4 flex items-center justify-center text-spi-muted font-mono text-xs">
                    [ reCAPTCHA Widget ]
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button type="submit" className="bg-spi-red hover:bg-spi-red-hover text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center gap-3 transition-colors group">
                      Submit form to SPI
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button type="button" className="bg-spi-dark border border-spi-border hover:border-white text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center gap-3 transition-colors">
                      Cancel
                      <X size={16} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Info & Map */}
            <div className="lg:col-span-5 space-y-10">
              
              <div className="bg-spi-surface border border-spi-border p-8 relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-spi-border to-spi-muted"></div>
                <h4 className="font-mono text-sm text-white uppercase tracking-widest mb-8 flex items-center gap-2">
                  Address & Info
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red flex-shrink-0 group-hover:border-spi-red transition-colors">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-white uppercase tracking-tight mb-1">Headquarters</h5>
                      <address className="not-italic text-spi-muted text-sm leading-relaxed">
                        Special Projects International, Inc.<br />
                        1720 West Lee St<br />
                        Louisville, KY 40210
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red flex-shrink-0 group-hover:border-spi-red transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-white uppercase tracking-tight mb-1">Phone</h5>
                      <a href="tel:502-778-3883" className="text-spi-muted text-sm hover:text-spi-red transition-colors">
                        502-778-3883
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red flex-shrink-0 group-hover:border-spi-red transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-white uppercase tracking-tight mb-1">Email</h5>
                      <a href="mailto:sales@specialprojects.com" className="text-spi-muted text-sm hover:text-spi-red transition-colors">
                        sales@specialprojects.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red flex-shrink-0 group-hover:border-spi-red transition-colors">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-white uppercase tracking-tight mb-1">Business Hours</h5>
                      <p className="text-spi-muted text-sm">
                        Open Monday through Friday<br />
                        8 AM to 5 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-mono text-sm text-white uppercase tracking-widest flex items-center gap-2">
                  Visit our warehouse
                </h4>
                <div className="border border-spi-border bg-spi-surface p-2">
                  <iframe 
                    width="100%" 
                    height="300" 
                    frameBorder="0" 
                    className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    src="https://www.google.com/maps/embed/v1/place?q=1720%20West%20Lee%20St%20Louisville%2C%20KY%2040210&key=AIzaSyB4LanI-txSGbBSUruHSLuuoTEhMPlmYsY" 
                    allowFullScreen>
                  </iframe>
                </div>

                <div className="border border-spi-border bg-spi-surface p-6">
                  <h4 className="font-bold text-white uppercase tracking-tight mb-4">Directions</h4>
                  <a 
                    href="https://specialprojects.com/themes/special-projects/assets/images/spi-map.gif" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block group relative overflow-hidden border border-spi-border"
                  >
                    <div className="absolute inset-0 bg-spi-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <span className="font-bold text-white uppercase tracking-wider text-sm flex items-center gap-2">
                        Open Map To Save <Send size={16} />
                      </span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://specialprojects.com/themes/special-projects/assets/images/spi-map.gif" 
                      className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      alt="Directions to contact us" 
                    />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
