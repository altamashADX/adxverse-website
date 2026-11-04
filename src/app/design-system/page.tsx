import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const palette = [
  { name: 'Graphite', hex: '#171A1B', color: '#171A1B', ink: '#F0EEE8' },
  { name: 'Carbon', hex: '#101213', color: '#101213', ink: '#F0EEE8' },
  { name: 'Iron', hex: '#252A2B', color: '#252A2B', ink: '#F0EEE8' },
  { name: 'Ivory', hex: '#F0EEE8', color: '#F0EEE8', ink: '#171A1B' },
  { name: 'Champagne', hex: '#C3A36A', color: '#C3A36A', ink: '#171A1B' },
];

export default function DesignSystemPage() {
  return (
    <main className="design-preview">
      <header className="design-preview__header">
        <Container>
          <nav aria-label="Design system navigation" className="design-preview__nav">
            <Link aria-label="ADXverse home" className="wordmark" href="/">
              ADX<span className="wordmark__accent">verse</span>
            </Link>
            <span className="design-preview__nav-note">Visual language / exploration 02</span>
          </nav>
        </Container>
      </header>

      <Container>
        <section className="design-preview__hero">
          <div className="design-preview__hero-main">
            <div className="design-preview__hero-index">
              <p className="adx-eyebrow">ADXVERSE / DESIGN FOUNDATIONS</p>
            </div>
            <h1 className="adx-display design-preview__hero-title">
              Made to bring
              <span>things together.</span>
            </h1>
            <div className="design-preview__hero-actions">
              <Button size="large">Explore the system <span aria-hidden="true">↘</span></Button>
              <Button size="large" variant="secondary">Visual direction 02</Button>
            </div>
          </div>
          <div className="design-preview__hero-side">
            <span className="design-preview__meta">01 / The point of view</span>
            <p className="adx-body-lg">
              One connected practice across design, technology, spaces, engineering and
              delivery. Different disciplines. One considered outcome.
            </p>
            <p className="adx-caption">
              Architectural in its structure. Contemporary in its expression. Clear in
              every interaction.
            </p>
          </div>
        </section>

        <section aria-labelledby="palette-heading" className="design-preview__section">
          <div className="design-preview__section-head">
            <div>
              <p className="adx-eyebrow mb-5">02 / Material and tone</p>
              <h2 className="adx-heading-xl" id="palette-heading">A darker kind of warmth.</h2>
              <p className="adx-body-lg mt-6 max-w-2xl">
                Graphite gives the system depth. Ivory carries the message. Champagne
                appears only where the eye needs a point of focus.
              </p>
            </div>
            <p className="design-preview__section-number">CORE PALETTE / 05 COLOURS</p>
          </div>
          <div className="design-preview__palette">
            {palette.map((item) => (
              <div className="design-preview__swatch" key={item.name} style={{ background: item.color, color: item.ink }}>
                <span className="design-preview__swatch-name">{item.name}</span>
                <span className="design-preview__swatch-hex">{item.hex}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="type-heading" className="design-preview__section">
          <div className="design-preview__section-head">
            <div>
              <p className="adx-eyebrow mb-5">03 / Typography</p>
              <h2 className="adx-heading-xl" id="type-heading">A stronger voice.</h2>
              <p className="adx-body-lg mt-6 max-w-2xl">
                Display typography is structural and assured. Supporting text stays
                open, readable and direct.
              </p>
            </div>
            <p className="design-preview__section-number">DISPLAY / BAHNSCHRIFT STACK</p>
          </div>

          <div className="design-preview__type-layout">
            <div>
              <div className="design-preview__type-feature">
                <p className="adx-caption mb-5">DISPLAY / 01 — STATEMENT</p>
                <p className="design-preview__type-display">Think in<br />whole systems.</p>
              </div>
              <div className="design-preview__type-feature">
                <p className="adx-caption mb-5">HEADING / 02 — SECTION</p>
                <p className="design-preview__type-heading">Designed with intent.<br />Built to work.</p>
              </div>
            </div>
            <div className="design-preview__type-aside">
              <div>
                <span className="adx-caption">BODY / LARGE</span>
                <p className="design-preview__type-body">
                  We connect creative thinking with technical understanding and
                  practical delivery — from one focused requirement to a complete
                  project.
                </p>
              </div>
              <div>
                <span className="adx-caption">BODY / DEFAULT</span>
                <p className="adx-body">
                  Clear language. Comfortable reading size. A rhythm that gives complex
                  ideas room to make sense.
                </p>
              </div>
              <div>
                <span className="adx-caption">LABEL / METADATA</span>
                <p className="adx-eyebrow">Design / Technology / Build</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="composition-heading" className="design-preview__section">
          <div className="design-preview__section-head">
            <div>
              <p className="adx-eyebrow mb-5">04 / Composition</p>
              <h2 className="adx-heading-xl" id="composition-heading">Order, with room to move.</h2>
              <p className="adx-body-lg mt-6 max-w-2xl">
                A twelve-column foundation supports asymmetry, alignment and editorial
                pacing without forcing every section into the same template.
              </p>
            </div>
            <p className="design-preview__section-number">12-COLUMN / RESPONSIVE GRID</p>
          </div>
          <div aria-label="Example of an asymmetrical twelve-column layout grid" className="design-preview__grid-demo">
            {Array.from({ length: 6 }, (_, index) => <div aria-hidden="true" className="design-preview__grid-cell" key={index} />)}
          </div>
        </section>

        <section aria-labelledby="interaction-heading" className="design-preview__section">
          <div className="design-preview__section-head">
            <div>
              <p className="adx-eyebrow mb-5">05 / Interaction</p>
              <h2 className="adx-heading-xl" id="interaction-heading">Quietly decisive.</h2>
              <p className="adx-body-lg mt-6 max-w-2xl">
                Controls are direct, tactile and legible. The accent colour is reserved
                for the action that matters most.
              </p>
            </div>
            <p className="design-preview__section-number">BUTTONS / STATES / SURFACES</p>
          </div>
          <div className="space-y-10">
            <div>
              <p className="adx-caption mb-4">PRIMARY AND SECONDARY ACTIONS</p>
              <div className="design-preview__component-row">
                <Button size="large">Start a project <span aria-hidden="true">↗</span></Button>
                <Button size="large" variant="secondary">Explore capabilities</Button>
                <Button size="large" variant="quiet">View our approach <span aria-hidden="true">→</span></Button>
              </div>
            </div>
            <div className="design-preview__component-row">
              <div className="design-preview__component-block">
                <span className="adx-caption">SURFACE / 01</span>
                <span className="text-base font-semibold">Graphite field</span>
                <span className="adx-caption">#171A1B · PRIMARY CANVAS</span>
              </div>
              <div className="design-preview__component-block" style={{ background: 'var(--adx-surface-raised)' }}>
                <span className="adx-caption">SURFACE / 02</span>
                <span className="text-base font-semibold">Raised layer</span>
                <span className="adx-caption">#252A2B · FOCUSED CONTENT</span>
              </div>
              <div className="design-preview__component-block" style={{ background: 'var(--adx-paper)', color: 'var(--adx-ink)' }}>
                <span className="text-xs font-semibold tracking-widest">SURFACE / 03</span>
                <span className="text-base font-semibold">Warm paper</span>
                <span className="text-xs">#E4E1D8 · CONTRAST MOMENT</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="design-preview__footer">
          <span className="wordmark">ADX<span className="wordmark__accent">verse</span></span>
          <span className="adx-caption">FORM & FUNCTION / EXPLORATION 02 / NOT YET APPROVED</span>
        </footer>
      </Container>
    </main>
  );
}
