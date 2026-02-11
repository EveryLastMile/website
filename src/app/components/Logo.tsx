import imgLogo from "figma:asset/9eb54bfd403b25b9ab8936b38652dc53e0f59595.png";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  // iOS-style app icon radius (22.37% of size for authentic app icon look)
  const radiusClasses = {
    sm: 'rounded-[18%]',
    md: 'rounded-[22%]',
    lg: 'rounded-[22%]'
  };

  return (
    <div className={`relative overflow-hidden ${sizeClasses[size]} ${radiusClasses[size]} ${className}`}>
      <div className="absolute bg-[#96be39] left-0 w-full h-full top-0" />
      <div className="absolute left-[-61%] w-[168%] h-[168%] top-[-29%]">
        <img 
          alt="Every Last Mile Logo" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" 
          src={imgLogo} 
        />
      </div>
    </div>
  );
}