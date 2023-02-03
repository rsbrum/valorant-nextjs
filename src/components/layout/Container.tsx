import { ReactNode } from "react";
import { createStyles, AppShell, Header } from '@mantine/core';
import Image from "next/image";
import ValorantLogo from "@/../public/logo/valorant.png"
import Link from "next/link";

interface LayoutProps {
  children: ReactNode
}

export default function Container({ children }: LayoutProps) {
  const { classes } = useStyles();

  return (
    <AppShell
      padding="md"
      styles={{
        main: {
          width: "100vw",
          heigh: "100vh",
          alignContent: "center",
          justifyContent: "center"
        }
      }}
      header={
        <Header height={60}>
          <div className={classes.headerContainer}>
            <Link href={'/'}> 
              <Image className={classes.logo} src={ValorantLogo} alt="logo" height={50} width={60} />
            </Link>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    height: '100%',
    alignItems: 'center'
  },
  logo: {
    marginLeft: 10
  }
}));
