export default function HomePage() {
  return (
    <main className="foundation-screen">
      <div className="foundation-screen__topline">
        <span className="wordmark">ADX<span className="wordmark__accent">verse</span></span>
        <span className="foundation-screen__status">A new digital experience</span>
      </div>

      <section className="foundation-screen__content" aria-labelledby="foundation-title">
        <p className="eyebrow">ALTAMASH DESIGNING XVERSE</p>
        <h1 id="foundation-title">
          From a single requirement
          <span>to a complete project.</span>
        </h1>
        <p className="foundation-screen__intro">
          Design, technology, spaces and execution — connected through one integrated
          approach.
        </p>
        <div className="foundation-screen__rule" />
        <p className="foundation-screen__note">
          The foundation is being built. The full ADXverse experience is taking shape.
        </p>
      </section>

      <footer className="foundation-screen__footer">
        <span>DESIGN · TECHNOLOGY · BUILD</span>
        <span>© {new Date().getFullYear()} ADXverse</span>
      </footer>
    </main>
  );
}
