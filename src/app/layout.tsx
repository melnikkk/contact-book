import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SubmitButton } from '@/ui/SubmitButton';
import { createContact } from '@/data/actions/createContact';
import './globals.css';
import { ContactsList } from '@/app/_components/ContactsList';
import { getContacts } from '@/data/service/getContacts';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contacts = await getContacts();

  return (
    <html lang="en">
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid min-h-screen grid-rows-[50px_auto] gap-4">
          <div className="col-span-8 grid content-center justify-center border-2 border-white">
            <form action={createContact}>
              <SubmitButton label="Add contact" />
            </form>
          </div>
          <div className="col-span-1 grid justify-center border-2 border-white p-6">
            <ContactsList contacts={contacts} />
          </div>
          <div className="col-span-7 grid content-center justify-center border-2 border-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
