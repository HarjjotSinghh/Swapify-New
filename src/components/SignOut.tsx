'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';

export default function SignOut() {
  const supabase = createClientComponentClient();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      
      console.error('ERROR:', error);
    } else {
      window.location = `${window.location.origin}/`
    }
    
  }

  return (
    <button type="button" className="hover:bg-accent font-inconsolata text-lg hover:text-background text-text uppercase ease-in-out duration-500 border-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 border-primary py-2 px-6 rounded-md" onClick={handleSignOut}>
      LOGOUT
    </button>
  );
}
