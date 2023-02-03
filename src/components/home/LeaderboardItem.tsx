import { ILeaderboardItem } from '@/typings';
import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    createStyles,
} from '@mantine/core';
import { ChevronRight } from 'tabler-icons-react';
import { useRouter } from 'next/navigation';


interface ILeaderboardItemProps {
    item: ILeaderboardItem
}
export default function LeaderboardItem({ item }: ILeaderboardItemProps) {
    const router = useRouter();
    const { classes } = useStyles();

    function navigate() {
        router.push(`/player/${item.puuid}`)
    }

    if (item.leaderboardRank === 1) {
        return <></>
    }

    return (
        <li key={item.PlayerCardID} onClick={navigate}>
            <UnstyledButton className={classes.container} >
                <Group>
                    <Avatar src={''} radius="xl" />

                    <div style={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            {item.gameName}
                        </Text>

                        <Text color="dimmed" size="xs">
                            {item.tagLine}
                        </Text>
                    </div>

                    <div>
                        <Text weight={"bold"}>
                            {item.leaderboardRank == 2 &&
                                <>
                                    🥇 #{item.leaderboardRank - 1}
                                </>
                            }

                            {item.leaderboardRank === 3 &&
                                <>
                                    🥈 #{item.leaderboardRank - 1}
                                </>
                            }

                            {item.leaderboardRank === 4 &&
                                <>
                                    🥉 #{item.leaderboardRank - 1}
                                </>
                            }

                            {item.leaderboardRank > 4 &&
                                <>
                                    #{item.leaderboardRank - 1}
                                </>
                            }
                        </Text>
                    </div>

                    <ChevronRight size={14} />
                </Group>
            </UnstyledButton>
        </li>
    )
}

const useStyles = createStyles((theme) => ({
    container: {
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
    },
}));
