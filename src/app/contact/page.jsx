import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-light">
      <section className="bg-primary py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                <a href="tel:+18016769222" className="text-accent hover:text-[#3b7fc4]">
                  (801) 676-9222
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a
                  href="mailto:office@fisherpaintinc.com"
                  className="text-accent hover:text-[#3b7fc4]"
                >
                  office@fisherpaintinc.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Address:</span> 687 W 6960 S,
                Midvale, UT 84047
              </p>
              <p>
                <span className="font-semibold text-slate-900">Hours:</span> Mon-Fri 7:00 AM –
                5:00 PM, Sat-Sun Closed
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Fisher Painting Inc location map"
                src="https://www.google.com/maps?q=687+W+6960+S,+Midvale,+UT+84047&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
