import { IMatchPlayerInfo, IRoundsInfo } from "@/typings";
import TeamCard from "./TeamCard";

export interface IMatchPlayerTeamInfoProps {
    playerTeam: string,
    roundsInfo: IRoundsInfo,
    won: boolean
}

export default function MatchPlayerTeamInfo({ playerTeam, roundsInfo, won }: IMatchPlayerTeamInfoProps) {
    return (
        <div>
            <TeamCard won={won} team={playerTeam} roundsInfo={roundsInfo} />
        </div>
    );
}