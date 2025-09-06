import "./globals.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryProviders } from "../components/providers";
import theme from '../themes/config';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryProviders>
            {children}
          </QueryProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
