type BrandNameProps = {
  className?: string;
};

export default function BrandName({ className }: BrandNameProps) {
  return (
    <span className={className}>
      commo<span className="text-brand-500">.</span>
    </span>
  );
}
