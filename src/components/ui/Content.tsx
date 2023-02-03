import { createStyles, Group } from '@mantine/core';
import { ReactNode } from "react";

interface IContentProps {
    children: ReactNode
}

export default function Content({children}: IContentProps) {
    const { classes, cx } = useStyles();
    return ( 
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                {children}
            </div>
        </div>
    )
}

const useStyles = createStyles((theme) => ({ 
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    contentContainer: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }, 
  }));
  