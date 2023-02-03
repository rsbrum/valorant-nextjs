import { IRoundsInfo } from "@/typings";
import { Text } from "@mantine/core";

export interface ITeamCardProps {
    roundsInfo: IRoundsInfo,
    won: boolean,
    team: string
}

export default function TeamCard({ won, team, roundsInfo }: ITeamCardProps) {

    function getWon() {
        if (won)
            return (
                <Text color="green">Team won</Text>
            )
        else
            return (
                <Text color="dimmed">Team lost</Text>
            )

    }

    function getRounds() {
        if (won)
            return (
                <Text size={'sm'}> <span color="green">{roundsInfo.rounds_won}</span>:{roundsInfo.rounds_lost} </Text>
            )
        else
            return (
                <Text size={'sm'}>{roundsInfo.rounds_lost}:{roundsInfo.rounds_won} </Text>
            )
    }

    return (
        <div>
            {team === 'Red' ? (
                <>
                    <Text weight={900} color="red">RED TEAM</Text>
                    {getWon()}
                    {getRounds()}
                </>
            ) : (
                <>
                    <Text weight={900} color="blue">BLUE TEAM</Text>
                    {getWon()}
                    {getRounds()}
                </>

            )}
        </div>
    );
}
