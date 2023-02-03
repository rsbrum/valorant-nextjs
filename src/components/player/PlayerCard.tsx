import { IPlayer } from '@/typings';
import { createStyles, Avatar, Text, Group } from '@mantine/core';

interface IPlayerCardProps {
  player: IPlayer
}

export function PlayerCard({ player }: IPlayerCardProps) {
  const { classes } = useStyles();

  return (
    <div>
      <Group noWrap>
        <Avatar src={player.card.large} size={94} radius="md" />
        <div>
          <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
            Level {player.account_level}
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {player.name}#{player.tag}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <Text transform='uppercase' size="xs" color="dimmed">
              REGION: {player.region}
            </Text>
          </Group>


        </div>
      </Group>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));
