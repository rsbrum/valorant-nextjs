import Content from '@/components/ui/Content'
import { useRouter } from 'next/router'
import { apiSlice } from '@/redux/apiSlice';
import { setSelectedPlayer } from '@/redux/player';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { IMatch, IPlayer } from "@/typings";
import { PlayerCard } from '@/components/player/PlayerCard';
import Loader from '@/components/ui/Loader';
import Matches from '@/components/player/Matches';
import { createStyles, Text } from "@mantine/core";
import ErrorText from '@/components/layout/ErrorText';

export default function PlayerPage() {
    const [player, setPlayer] = useState();
    const [matches, setMatches] = useState<IMatch[]>();
    const [trigger, result] = apiSlice.endpoints.getPlayerByUuid.useLazyQuery();
    const [matchesTrigger, matchesResult] = apiSlice.endpoints.getMatchesByPlayer.useLazyQuery();
    const dispatch = useDispatch();
    const router = useRouter();
    const { classes } = useStyles();

    useEffect(() => {
        if (!router.isReady)
            return;

        async function fecthData() {
            const { playerUuid } = router.query;
            const res = await trigger({ uuid: playerUuid as string });
            let { data } = res.data;
            setPlayer({ ...data })
            dispatch(setSelectedPlayer(data));
        }

        fecthData();
    }, [router.isReady])

    useEffect(() => {
        if (!player)
            return;

        async function fetchData(player: IPlayer) {
            const res = await matchesTrigger({
                region: player.region, name: player.name, tag: player.tag
            });

            const { data } = res.data;
            setMatches([...data]);
        }

        fetchData(player);
    }, [player])

    if (result.isError) {
        return (
            <ErrorText text={"There was an error loading player datas"} />
        )
    }
    if (result.isLoading) {
        return (
            <Loader />
        )
    }

    if (player) {
        return (
            <Content>
                <PlayerCard player={player} />

                <div className={classes.titleContainer}>
                    <Text weight={900} size={'lg'}> MATCH HISTORY </Text>
                </div>

                {matches ? <Matches matches={matches} /> : <Loader />}
            </Content>
        )
    }

}

const useStyles = createStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10
    }
}));
