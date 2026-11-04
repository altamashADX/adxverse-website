import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: ReactNode;
};

export function SectionHeading({
  aside,
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="design-preview__section-head">
      <div className="max-w-3xl space-y-4">
        <p className="adx-eyebrow">{eyebrow}</p>
        <h2 className="adx-heading-xl">{title}</h2>
        {description ? <p className="adx-body-lg max-w-2xl">{description}</p> : null}
      </div>
      {aside}
    </div>
  );
}
