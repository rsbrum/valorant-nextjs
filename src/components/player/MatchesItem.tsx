import { IMatch, IMatchPlayerInfo, IRoundsInfo } from '@/typings';
import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    createStyles,
} from '@mantine/core';
import { ChevronRight, H1 } from 'tabler-icons-react';
import { RootState } from '@/redux/store';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import MatchPlayerTeamInfo from './MatchPlayerTeamInfo';
import MatchPlayerInfo from './MatchPlayerInfo';
import Loader from '../ui/Loader';

interface IMatchesItemProps {
    match: IMatch
}

export default function MatchesItem({ match }: IMatchesItemProps) {
    const [playerInfo, setPlayerInfo] = useState<IMatchPlayerInfo>({} as IMatchPlayerInfo);
    const [playerTeam, setPlayerTeam] = useState<string>("");
    const [roundsInfo, setRoundsInfo] = useState<IRoundsInfo>({} as IRoundsInfo);
    const [timeElapsed, setTimeElapsed] = useState<string>();
    const [won, setWon] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const { selectedPlayer } = useSelector((state: RootState) => state.player);
    const { classes } = useStyles();

    useEffect(() => {
        getPlayerInfo();
        getMatchTimeElapsed();
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [playerInfo])

    function getPlayerInfo() {

        const allPlayers = match.players.all_players;
        const player = allPlayers.find(player => selectedPlayer.name === player.name);
        const playerTeam = player?.team as string;

        setPlayerInfo(player as IMatchPlayerInfo);
        setPlayerTeam(playerTeam);
        if (match.teams.blue.has_won == true && playerTeam == 'Blue') {
            setWon(true);
            setRoundsInfo(match.teams.blue);
        } else {
            setWon(false);
            setRoundsInfo(match.teams.red);
        }

    }

    function getMatchTimeElapsed() {
        const start = match.metadata.game_start;
        const end = start + match.metadata.game_length;
        setTimeElapsed(timeDiff(start, end));

    }

    function timeDiff(tstart: number, tend: number) {
        var diff = Math.floor((tend - tstart) / 1000), units = [
            { d: 60, l: "seconds" },
            { d: 60, l: "minutes" }
        ];

        var s = '';
        for (var i = 0; i < units.length; ++i) {
            s = (diff % units[i].d) + " " + units[i].l + " " + s;
            diff = Math.floor(diff / units[i].d);
        }
        return s;
    }

    if (loading)
        return (
            <Loader />
        )
    
    return (
        <li key={match.metadata.matchid}>
            <UnstyledButton className={classes.container} >
                <Group>
                    <Avatar size={'lg'} src={`/maps/${match.metadata.map}.png`} radius="sm" />

                    <div style={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            {match.metadata.map}
                        </Text>

                        <Text color="dimmed" size="xs">
                            {match.metadata.game_start_patched}
                        </Text>

                        <Text>
                            Duration: {timeElapsed}
                        </Text>
                    </div>

                    <div>
                        <MatchPlayerTeamInfo
                            playerTeam={playerTeam}
                            roundsInfo={roundsInfo}
                            won={won} />
                    </div>

                    <ChevronRight size={14} />
                </Group>
                
                <div>
                    {playerInfo && <MatchPlayerInfo playerInfo={playerInfo} />}
                </div>

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