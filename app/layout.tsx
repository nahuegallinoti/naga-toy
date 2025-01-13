import "./globals.css";

export const metadata = {
  title: "GrowToyz",
  description: "Phygital toys for the digital age",
  keywords: "3D, 3D Printing, 3D Models, 3D Design, 3D Printing Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
