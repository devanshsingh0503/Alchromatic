import Link from "next/link";
import { siteConfig } from "@/data/config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-32 xl:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-rebelton text-3xl tracking-widest text-white">{siteConfig.brand.name}</h2>
            <p className="mt-3 font-poppins text-sm leading-relaxed text-white/50">
              {siteConfig.brand.description.slice(0, 120)}...
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white hover:text-white"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white hover:text-white"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins text-xs uppercase tracking-[0.15em] text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-poppins text-sm text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-xs uppercase tracking-[0.15em] text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              {siteConfig.contact.phones.map((phone) => (
                <li key={phone} className="flex items-start gap-3">
                  <Phone size={14} className="mt-0.5 shrink-0 text-white/30" />
                  <a href={`tel:${phone}`} className="font-poppins text-sm text-white/60 hover:text-white transition">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 shrink-0 text-white/30" />
                <a href={`mailto:${siteConfig.contact.email}`} className="font-poppins text-sm text-white/60 hover:text-white transition">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="mt-0.5 shrink-0 text-white/30" />
                <div className="font-poppins text-sm text-white/60">
                  <div>{siteConfig.contact.hours.weekdays}</div>
                  <div>{siteConfig.contact.hours.weekend}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-poppins text-xs uppercase tracking-[0.15em] text-white/40 mb-5">
              Locations
            </h3>
            <ul className="space-y-5">
              {siteConfig.locations.map((loc) => (
                <li key={loc.id} className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-white/30" />
                  <div>
                    <p className="font-poppins text-xs uppercase tracking-[0.08em] text-white/80 mb-1">{loc.label}</p>
                    <p className="font-poppins text-sm text-white/50" style={{ whiteSpace: "pre-line" }}>
                      {loc.addressShort}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-xs text-white/30">
            © {year} {siteConfig.brand.name}. All rights reserved.
          </p>
          <p className="font-poppins text-xs text-white/20">
            Premier Art Supplies · Crafted for Creators
          </p>
        </div>
      </div>
    </footer>
  );
}
