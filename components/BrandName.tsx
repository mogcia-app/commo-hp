type BrandNameProps = {
  className?: string;
};

export default function BrandName({ className }: BrandNameProps) {
  return (
    <span className={className}>
      commo<span className="text-[#A66BE8]">.</span>
    </span>
  );
}
