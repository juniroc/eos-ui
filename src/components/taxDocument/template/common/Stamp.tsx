import React, { PropsWithChildren, useEffect, useState } from 'react';
import { getStamp } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';

function Stamp({
  className,
  style,
  children,
}: PropsWithChildren<{ className?: string; style?: React.CSSProperties }>) {
  const { token } = useAuth();
  const [imageSource, setImageSource] = useState<string | null>(null);

  const getStampImage = async () => {
    if (!token) return;
    const image = await getStamp(token);
    setImageSource(image);
  };

  useEffect(() => {
    getStampImage();
  }, [token]);

  return (
    <span className={className} style={{ ...style, position: 'relative' }}>
      {children}
      {imageSource && (
        <>
          <img
            src={imageSource}
            alt="stamp"
            className="absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[48pt]
        h-[48pt]
        pointer-events-none"
          />
        </>
      )}
    </span>
  );
}

export default Stamp;
