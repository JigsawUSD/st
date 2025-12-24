
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/st');
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <p className="text-foreground">Redirecionando...</p>
    </div>
  );
}
