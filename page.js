import PriceTabs from "./PriceTabs";
import { FAQ, FREE_REVISI, MEMBER, SERVICES, SOCIALS, STEPS, TESTIMONI, waLink } from "./data";

const WA = { target: "_blank", rel: "noopener noreferrer" };

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="logo" href="#"><i>JS</i> Joki Syndicate</a>
          <nav aria-label="Menu utama">
            <a href="#layanan">Layanan</a>
            <a href="#harga">Price List</a>
            <a href="#alur">Cara Order</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn-primary btn-sm" href={waLink()} {...WA}>Chat WhatsApp</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">Partner kebutuhan akademik &amp; kreatif</div>
              <h1>Olah Data &amp; <span>Tugas Kuliah</span> beres, tinggal terima.</h1>
              <p className="sub">
                Semua tugas kuliah maupun sekolah kami bisa kerjakan. Kami juga membuka layanan olah data SPSS, revisi tugas, skripsi, laporan, dan jasa penyusunan skripsi.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href={waLink()} {...WA}>Konsultasi Gratis</a>
                <a className="btn btn-ghost" href="#harga">Lihat Price List</a>
              </div>
              <div className="chips">
                <span className="chip">Respon cepat</span>
                <span className="chip">File dijaga privasinya</span>
                <span className="chip">Free revisi {FREE_REVISI}</span>
              </div>
            </div>
            <aside className="hero-card" aria-label="Ringkasan">
              <div className="big">{TESTIMONI.replace("+", "")}<small>+</small></div>
              <p>Testimoni dari mahasiswa &amp; pelajar</p>
              <ul>
                <li>Olah data SPSS &amp; SmartPLS</li>
                <li>Makalah, PPT, RPP, jurnal, laporan</li>
                <li>Skripsi BAB 1 sampai 5</li>
                <li>Member hemat 10-20% tiap tugas</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="layanan">
          <div className="wrap">
            <div className="eyebrow">Layanan</div>
            <h2 className="h2">Apa saja yang bisa kami kerjakan</h2>
            <p className="lead">Semua tugas kuliah maupun sekolah kami bisa kerjakan. Kalau tugasmu tidak ada di daftar, tanyakan saja lewat chat.</p>
            <div className="svc-grid">
              {SERVICES.map((s) => (
                <div className="svc" key={s.title}>
                  <div className="ic">{s.icon}</div>
                  <b>{s.title}</b>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="harga">
          <div className="wrap">
            <div className="price-head">
              <div>
                <div className="eyebrow">Price List</div>
                <h2 className="h2">Harga jelas, pilih kategori</h2>
              </div>
              <span className="free-rev">✓ Semua layanan gratis revisi {FREE_REVISI}</span>
            </div>
            <PriceTabs />
          </div>
        </section>

        <section id="alur">
          <div className="wrap">
            <div className="eyebrow">Cara Order</div>
            <h2 className="h2">Empat langkah, tanpa ribet</h2>
            <div className="steps">
              {STEPS.map((s) => (
                <div className="step" key={s.title}>
                  <b>{s.title}</b>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="eyebrow">Kepercayaan</div>
            <h2 className="h2">Sudah dipercaya ribuan klien</h2>
            <div className="proof">
              <div className="stat"><b>{TESTIMONI}</b><span>Testimoni</span></div>
              <div className="stat"><b>{FREE_REVISI}</b><span>Free revisi semua layanan</span></div>
              <div className="stat"><b>10-20%</b><span>Diskon untuk member ({MEMBER.price})</span></div>
            </div>
          </div>
        </section>

        <section id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="eyebrow">FAQ</div>
            <h2 className="h2">Pertanyaan umum</h2>
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="contact">
              <div>
                <h2>Siap kerjakan tugasmu?</h2>
                <p>Kirim detail tugas sekarang. Respon cepat, estimasi harga jelas.</p>
                <div className="cta-row"><a className="btn btn-accent" href={waLink()} {...WA}>Chat WhatsApp</a></div>
              </div>
              <div className="links">
                {SOCIALS.map((s) => (
                  <a key={s.name} href={s.href} {...WA}><span>{s.name}</span><small>{s.handle}</small></a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="wrap">© Joki Syndicate. Partner kebutuhan akademik &amp; kreatif.</div></footer>
      <a className="fab" href={waLink()} {...WA} aria-label="Chat WhatsApp">Chat WA</a>
    </>
  );
}
