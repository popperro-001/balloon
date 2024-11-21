import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PostModal } from "@/components/services/post-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balloon",
  description: "Decoration Service",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <PostModal />

          <div className="main">
            <div className="gradient" />
          </div>

          <div className="min-h-screen w-[100vw] app">
            <div className="flex w-full h-full">
              <div className="mx-auto max-w-screen-2xl h-full w-full">
                <Navbar />

                <main className="h-full py-8 pt-28 px-6 flex flex-col">
                  {children}
                </main>
                
                <Footer />
              </div>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
