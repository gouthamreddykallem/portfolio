import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className = '' }) => {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div className={`relative flex items-center justify-center bg-gray-800 ${className}`}>
        <User className="w-1/2 h-1/2 text-gray-400" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        priority
        quality={100}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default ProfileImage;