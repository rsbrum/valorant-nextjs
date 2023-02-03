import { createStyles, Text } from "@mantine/core";
import Container from "./Container"

interface IErrorProps {
    text: string
}

export default function ErrorText({text}: IErrorProps) {
    const { classes } = useStyles();

    return (
        <Container>
            <div className={classes.textContainer}>
                <Text weight={500}> {text} </Text>
            </div>           
        </Container>
    )
}

const useStyles = createStyles((theme) => ({
    textContainer: {
        display: 'flex',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10
    }
}));
