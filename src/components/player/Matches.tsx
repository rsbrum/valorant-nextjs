import { IMatch } from "@/typings"
import MatchesItem from "./MatchesItem";

interface IMatchesProps {
    matches: IMatch[]
}

export default function Matches({ matches }: IMatchesProps) {

    return (
        <ul>
            {matches.map((match, index) => {
                return <MatchesItem key={index} match={match} />
            })}
        </ul>
    )
}

