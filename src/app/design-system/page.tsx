import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const colors = [
  { name: 'Ink', token: '--adx-ink', hex: '#0A0B0C' },
  { name: 'Background', token: '--adx-background', hex: '#101112' },
  { name: 'Surface', token: '--adx-surface', hex: '#181A1C' },
  { name: 'Warm white', token: '--adx-foreground', hex: '#F5F5F2' },
  { name: 'Muted', token: '--adx-muted', hex: '#B9B9B4' },
  { name: 'Subtle', token: '--adx-subtle', hex: '#92938F' },
  { name: 'Gold', token: '--adx-accent', hex: '#D6AA45' },
  { name: 'Gold light', token: '--adx-accent-bright', hex: '#E8BD62' },
  { name: 'Border', token: '--adx-border', hex: '#303337' },
  { name: 'Raised', token: '--adx-surface-raised', hex: '#202326' },
];

const spacing = [
  { name: 'XS', value: '8px', width: '8px' },
  { name: 'SM', value: '16px', width: '16px' },
  { name: 'MD', value: '24px', width: '24px' },
  { name: 'LG', value: '40px', width: '40px' },
  { name: 'XL', value: '64px', width: '64px' },
  { name: '2XL', value: '96px', width: '96px' },
];

export default function DesignSystemPage() {
  return (
    <main className="design-preview">
      <header className="design-preview__header">
        <Container>
          <nav aria-label="Design system navigation" className="design-preview__nav">
            <Link aria-label="ADXverse design system" className="wordmark" href="/">
              ADX<span className="wordmark__accent">verse</span>
            </Link>
            <span className="design-preview__nav-note">Design system / v0.1</span>
          </nav>
        </Container>
      </header>

      <Container>
        <section className="design-preview__hero">
          <p className="adx-eyebrow">ADXVERSE / FOUNDATIONS</p>
          <div className="design-preview__hero-copy">
            <h1 className="adx-display">
              A considered system.
              <br />
              <span>One connected experience.</span>
            </h1>
            <p className="adx-body-lg mt-8 max-w-2xl">
              The visual foundations for an integrated design, technology, spaces and
              project delivery platform. Quiet confidence, clear hierarchy and room to
              breathe.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button>Primary action <span aria-hidden="true">↗</span></Button>
            <Button variant="secondary">Secondary action</Button>
            <Button variant="quiet">Quiet action <span aria-hidden="true">→</span></Button>
          </div>
        </section>

        <section aria-labelledby="color-heading" className="design-preview__section">
          <SectionHeading
            id="color-heading"
            eyebrow="01 / Colour"
            title="Dark, warm and deliberate."
            description="Charcoal establishes depth. Warm whites carry the message. Gold is an accent for emphasis and action, never decoration."
            aside={<span className="design-preview__section-number">10 CORE TOKENS</span>}
          />
          <div className="design-preview__swatches">
            {colors.map((color) => (
              <div className="design-preview__swatch" key={color.token}>
                <div
                  aria-label={`${color.name} colour swatch`}
                  className="design-preview__swatch-color"
                  style={{ backgroundColor: `var(${color.token})` }}
                />
                <div className="design-preview__swatch-info">
                  <span className="text-sm font-medium">{color.name}</span>
                  <span className="adx-caption">{color.hex}</span>
                  <span className="adx-caption">{color.token}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="type-heading" className="design-preview__section">
          <SectionHeading
            id="type-heading"
            eyebrow="02 / Typography"
            title="Editorial hierarchy."
            description="A restrained type scale with tight display leading, readable body copy and small uppercase labels for navigation and metadata."
          />
          <div className="design-preview__type-grid">
            <div>
              <div className="design-preview__type-sample">
                <p className="adx-caption mb-4">DISPLAY / CLAMPED</p>
                <p className="adx-display">Make room for possibility.</p>
              </div>
              <div className="design-preview__type-sample">
                <p className="adx-caption mb-4">HEADING / XL</p>
                <p className="adx-heading-xl">From intent to outcome.</p>
              </div>
              <div className="design-preview__type-sample">
                <p className="adx-caption mb-4">HEADING / LG</p>
                <p className="adx-heading-lg">One partner. Connected capabilities.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="adx-caption mb-3">BODY / LARGE</p>
                <p className="adx-body-lg">
                  We bring disciplines together to shape thoughtful outcomes — from a
                  focused requirement to a complete project.
                </p>
              </div>
              <div>
                <p className="adx-caption mb-3">BODY / DEFAULT</p>
                <p className="adx-body">
                  Clear information, considered details and a consistent rhythm make
                  complex services easier to understand.
                </p>
              </div>
              <div>
                <p className="adx-caption mb-3">EYEBROW / LABEL</p>
                <p className="adx-eyebrow">Design · Technology · Build</p>
              </div>
              <div>
                <p className="adx-caption mb-3">CAPTION / METADATA</p>
                <p className="adx-caption">A considered detail. Never competing with the content.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="spacing-heading" className="design-preview__section">
          <SectionHeading
            id="spacing-heading"
            eyebrow="03 / Spacing"
            title="Space is part of the identity."
            description="A flexible spacing rhythm creates calm, gives content room and keeps layouts from feeling crowded."
          />
          <div className="design-preview__spacing max-w-2xl">
            {spacing.map((item) => (
              <div className="design-preview__spacing-row" key={item.name}>
                <span className="adx-caption">{item.name}</span>
                <div className="h-2 rounded-full bg-[var(--adx-surface-raised)]">
                  <div className="design-preview__spacing-bar" style={{ width: item.width }} />
                </div>
                <span className="adx-caption text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="components-heading" className="design-preview__section">
          <SectionHeading
            id="components-heading"
            eyebrow="04 / Components"
            title="Clear actions. No noise."
            description="Buttons use strong labels, deliberate contrast and consistent sizing. Secondary actions stay visibly secondary."
          />
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="adx-caption">BUTTON VARIANTS</p>
              <div className="design-preview__button-row">
                <Button>Start a project <span aria-hidden="true">↗</span></Button>
                <Button variant="secondary">Explore services</Button>
                <Button variant="quiet">View our work <span aria-hidden="true">→</span></Button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="adx-caption">BUTTON SIZES</p>
              <div className="design-preview__button-row">
                <Button size="small">Compact</Button>
                <Button>Default</Button>
                <Button size="large">Large action</Button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="adx-caption">DISABLED STATE</p>
              <div className="design-preview__button-row">
                <Button disabled>Unavailable action</Button>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="surface-heading" className="design-preview__section">
          <SectionHeading
            id="surface-heading"
            eyebrow="05 / Surfaces"
            title="Depth without effects."
            description="Subtle changes in surface tone and fine borders establish structure. No glow, heavy shadow or unnecessary gradients."
          />
          <div className="design-preview__surface-grid">
            <div className="design-preview__surface" style={{ background: 'var(--adx-background)' }}>
              <span className="adx-caption">LEVEL 01 / BASE</span>
              <span className="text-sm">Background</span>
            </div>
            <div className="design-preview__surface" style={{ background: 'var(--adx-surface)' }}>
              <span className="adx-caption">LEVEL 02 / SURFACE</span>
              <span className="text-sm">Raised content</span>
            </div>
            <div className="design-preview__surface" style={{ background: 'var(--adx-surface-raised)' }}>
              <span className="adx-caption">LEVEL 03 / RAISED</span>
              <span className="text-sm">Focused emphasis</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="principles-heading" className="design-preview__section">
          <SectionHeading
            id="principles-heading"
            eyebrow="06 / Principles"
            title="The rules behind the details."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ['01', 'Whitespace is intentional', 'Use generous section spacing and avoid packing unrelated content together.'],
              ['02', 'Gold is an accent', 'Reserve gold for actions, active states and small moments of emphasis.'],
              ['03', 'Hierarchy before decoration', 'Use scale, alignment and contrast to guide attention instead of effects.'],
              ['04', 'Motion respects the user', 'Keep transitions purposeful and honour reduced-motion preferences.'],
            ].map(([number, title, description]) => (
              <div className="border-t border-[var(--adx-border)] pt-5" key={number}>
                <p className="adx-caption mb-4">{number}</p>
                <h3 className="text-lg font-medium tracking-tight">{title}</h3>
                <p className="adx-body mt-2 max-w-lg">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="design-preview__footer">
          <span className="wordmark">ADX<span className="wordmark__accent">verse</span></span>
          <span className="adx-caption">FOUNDATIONS / DESIGN SYSTEM V0.1 / REVIEW BUILD</span>
        </footer>
      </Container>
    </main>
  );
}
