import "@/styles/globals.css";
export const metadata = {
  title: "Africa Samurai",
  description: "Empowering decisions with evidence to transform the education and professional integration of African children and youth.",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
