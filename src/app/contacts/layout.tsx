import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SubmitButton } from '@/ui/SubmitButton';
import { createContact } from '@/data/actions/createContact';
import { getContacts } from '@/data/service/getContacts';
import { ContactsList } from '@/app/contacts/_components/ContactsList';
import { LogoutButton } from '@/app/_components/LogoutButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contacts = await getContacts();

  return (
    <html lang="en">
      <body className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
        <div className="grid h-screen grid-cols-[250px_auto] grid-rows-[50px_auto] gap-2">
          <header className="col-span-8 grid content-center border-2 border-white p-4">
            <div className="flex justify-between">
              <form action={createContact}>
                <SubmitButton label="Add contact" />
              </form>
              <LogoutButton />
            </div>
          </header>
          <div className="overflow-scroll border-2 border-white p-6">
            <ContactsList contacts={contacts} />
          </div>
          <div className="col-span-7 grid w-full content-center justify-center border-2 border-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
