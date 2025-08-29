import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Tractor, Youtube, IndianRupee, MessageCircleMore, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Single-file React landing page for SKN Tractor Rent Service
// Fixed syntax: all JSX tags properly closed to avoid "Unterminated JSX contents" errors.

export default function SKNTractorRentService() {
  const contacts = [
    { label: "K. Sellamuthu (Owner)", phone: "+919655519580" },
    { label: "Karthick S (Director)", phone: "+918489558034" },
    { label: "Narendran S (Director)", phone: "+919787752591" },
  ];

  const pricing = [
    { item: "5-Plow", halfHour: 550, hour: 1100 },
    { item: "7-Plow", halfHour: 600, hour: 1200 },
    { item: "9-Plow", halfHour: 500, hour: 1000 },
    { item: "Rotavator", halfHour: 600, hour: 1200 },
    { item: "Mulcher", halfHour: 800, hour: 1600 },
    { item: "Cage Wheel", halfHour: 600, hour: 1200 },
    { item: "Trolley", halfHour: "Distance-based", hour: "Distance-based" },
  ];

  const videos = [
    { title: "Swaraj 735 FE in action", url: "https://www.youtube.com/watch?v=jK_8hedo9nk&t=10s" },
    { title: "Shri Manju Rotavator demo", url: "https://www.youtube.com/watch?v=R5cs-hoUqRA&t=1s" },
    { title: "Gomathi Mulcher field run", url: "https://www.youtube.com/watch?v=UnIHwH60d-c&t=1s" },
  ];

  const waMessage = "Hello%2C%20I%27m%20interested%20in%20renting%20your%20tractor%20services.";
  const emailAddress = "karthicksellamuthu22@gmail.com";
  const emailSubject = "Tractor%20Rental%20Inquiry";
  const emailBody = "Hello%2C%20I%27m%20interested%20in%20renting%20your%20tractor%20services.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-emerald-600 text-white">
              <Tractor className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">SKN Brand</p>
              <h1 className="text-lg font-bold leading-tight">SKN Tractor Rent Service</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {contacts.map((c) => (
              <a
                key={c.phone}
                href={`tel:${c.phone}`}
                className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border hover:bg-slate-50"
              >
                <Phone className="w-4 h-4" />
                {c.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <a href={`tel:${contacts[0].phone}`}>
              <Button className="rounded-2xl">
                <Phone className="w-4 h-4 mr-2" /> Call
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs tracking-widest font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">24×7 • Reliable • Farmer-first</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">Modern, Affordable Tractor & Implements on Rent</h2>
            <p className="mt-4 text-slate-600">We help you finish more work in less time with well-maintained equipment and transparent pricing. Free travel within 15 km of Karur; beyond that, nominal distance charges apply.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`https://wa.me/${contacts[0].phone.replace('+','')}?text=${waMessage}`} target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-2xl bg-green-600 text-white">
                  <MessageCircleMore className="w-5 h-5 mr-2" /> WhatsApp Us
                </Button>
              </a>

              <a href={`tel:${contacts[0].phone}`}>
                <Button size="lg" variant="outline" className="rounded-2xl">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </Button>
              </a>
            </div>

            <p className="mt-3 text-sm text-slate-500">தமிழிலும் சேவை — Tamil support available.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-3xl shadow-lg border-emerald-100">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-2xl bg-white border">
                    <div className="flex items-center gap-2">
                      <Tractor className="w-4 h-4" />
                      <span className="font-semibold">Swaraj 735 FE</span>
                    </div>
                    <p className="mt-2 text-slate-600">35–40 HP • Fuel efficient • Smooth performance</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4" />
                      <span className="font-semibold">Transparent Pricing</span>
                    </div>
                    <p className="mt-2 text-slate-600">Half-hour and hourly rates • Distance-based travel</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">24×7 Availability</span>
                    </div>
                    <p className="mt-2 text-slate-600">Book anytime to fit your farm schedule</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold">Karur & Nearby</span>
                    </div>
                    <p className="mt-2 text-slate-600">Free travel within 15 km</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold">Equipment for Rent</h3>
          <p className="mt-2 text-slate-600">Choose the right implement for the job. All machines are maintained regularly for peak performance.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Swaraj 735 FE Tractor", desc: "Reliable 35–40 HP tractor for all-round farm work." },
              { title: "Shri Manju Rotavator (36 blades)", desc: "Soil preparation, mixing, and seedbed finishing." },
              { title: "Gomathi Mulcher", desc: "Shreds crop residue; helps soil health and field clearing." },
              { title: "Manju Brand Trolley", desc: "Strong trolley for produce, inputs, and materials." },
              { title: "Cage Wheel", desc: "Improved traction in wet/muddy fields." },
              { title: "Plough (5/7/9)", desc: "Primary tillage options for different field needs." },
            ].map((s) => (
              <Card key={s.title} className="rounded-2xl">
                <CardContent className="p-5">
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-2xl md:text-3xl font-bold">Simple, Transparent Pricing</h3>
            <p className="text-sm text-slate-600">All prices in INR. Travel free within 15 km from Karur; beyond that, distance charges apply.</p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Equipment</th>
                  <th className="px-4 py-3 font-semibold">Per ½ Hour</th>
                  <th className="px-4 py-3 font-semibold">Per Hour</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row) => (
                  <tr key={row.item} className="border-t">
                    <td className="px-4 py-3">{row.item}</td>
                    <td className="px-4 py-3">{typeof row.halfHour === 'number' ? `₹ ${row.halfHour.toLocaleString('en-IN')}` : row.halfHour}</td>
                    <td className="px-4 py-3">{typeof row.hour === 'number' ? `₹ ${row.hour.toLocaleString('en-IN')}` : row.hour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Videos/Gallery */}
      <section id="gallery" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold">See It Working</h3>
          <p className="mt-2 text-slate-600">Short clips of our machines in the field. Ask us for more demos on WhatsApp.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {videos.map((v) => (
              <a key={v.title} href={v.url} target="_blank" rel="noreferrer" className="group">
                <Card className="rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-slate-200 flex items-center justify-center">
                      <Youtube className="w-10 h-10 opacity-70 group-hover:opacity-100 transition" />
                    </div>
                    <div className="p-4">
                      <p className="font-medium">{v.title}</p>
                      <p className="text-xs text-slate-500 mt-1">Watch on YouTube</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold">Contact & Service Area</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-slate-600 mt-1">9/7, South Cross, Veerarakkiyam PO, KR Puram TK, Karur DT, Tamil Nadu – 639114</p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold">Timings</p>
                    <p className="text-slate-600 mt-1">Open 24×7 (Advance booking recommended)</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-semibold mb-2">Phone</p>
                  <div className="flex flex-wrap gap-2">
                    {contacts.map((c) => (
                      <a key={c.phone} href={`tel:${c.phone}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-white">
                        <Phone className="w-4 h-4" /> {c.label}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <a
                      href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white"
                    >
                      <Mail className="w-4 h-4" /> Email Us
                    </a>
                    <a
                      href={`https://wa.me/${contacts[0].phone.replace('+','')}?text=${waMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-green-600 text-white"
                    >
                      <MessageCircleMore className="w-4 h-4" /> WhatsApp Chat
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <p className="font-semibold">Quick Estimate</p>
                <p className="text-sm text-slate-600 mt-1">Enter distance from Karur and hours needed to estimate travel + usage.</p>
                <Estimator />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border bg-white p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h4 className="text-2xl font-bold">Ready to book? We can start today.</h4>
              <p className="text-slate-600 mt-2">Message us on WhatsApp or call. Tamil/English support available.</p>
            </div>

            <div className="flex gap-3">
              <a href={`https://wa.me/${contacts[0].phone.replace('+','')}?text=${waMessage}`} target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-2xl bg-green-600 text-white">
                  <MessageCircleMore className="w-5 h-5 mr-2" /> WhatsApp
                </Button>
              </a>

              <a href={`tel:${contacts[0].phone}`}>
                <Button size="lg" variant="outline" className="rounded-2xl">
                  <Phone className="w-5 h-5 mr-2" /> Call
                </Button>
              </a>

              <a href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`} className="inline-flex">
                <Button size="lg" className="rounded-2xl bg-blue-600 text-white">
                  <Mail className="w-5 h-5 mr-2" /> Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} SKN Tractor Rent Service. All rights reserved.</p>
          <p className="text-xs text-slate-500">Made with ❤️ for farmers in Karur & beyond.</p>
        </div>
      </footer>
    </div>
  );
}

function Estimator() {
  const [distanceKm, setDistanceKm] = React.useState(10);
  const [hours, setHours] = React.useState(2);
  const baseRatePerHour = 1200; // default reference rate; tweak as needed
  const freeKm = 15;
  const perKm = 20; // distance charge beyond 15 km

  const distanceCharge = Math.max(0, distanceKm - freeKm) * perKm;
  const usageCharge = hours * baseRatePerHour;
  const total = distanceCharge + usageCharge;

  return (
    <div className="mt-4 space-y-4">
      <div>
        <label className="text-sm font-medium">Distance from Karur (km)</label>
        <input
          type="number"
          value={distanceKm}
          onChange={(e) => setDistanceKm(Number(e.target.value))}
          className="mt-1 w-full rounded-xl border px-3 py-2"
          min={0}
        />
      </div>

      <div>
        <label className="text-sm font-medium">Hours Required</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="mt-1 w-full rounded-xl border px-3 py-2"
          min={0}
          step={0.5}
        />
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 text-sm">
        <p className="flex items-center gap-2"><IndianRupee className="w-4 h-4" /> <span className="font-semibold">Usage:</span> ₹ {usageCharge.toLocaleString('en-IN')}</p>
        <p className="mt-1 flex items-center gap-2"><MapPin className="w-4 h-4" /> <span className="font-semibold">Travel:</span> ₹ {distanceCharge.toLocaleString('en-IN')} <span className="text-xs text-slate-500">(first {freeKm} km free)</span></p>
        <p className="mt-2 text-base font-bold">Estimated Total: ₹ {total.toLocaleString('en-IN')}</p>
        <p className="text-xs text-slate-500 mt-1">This is an estimate. Final price may vary by implement and field conditions.</p>
      </div>
    </div>
  );
}
