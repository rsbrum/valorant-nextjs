import { IMatchPlayerInfo } from "@/typings";
import {
    Group,
    Avatar,
    Text,
} from '@mantine/core';

interface IMatchPlayerInfoProps {
    playerInfo: IMatchPlayerInfo
}

export default function MatchPlayerInfo({ playerInfo }: IMatchPlayerInfoProps) {
    return (
        <Group>
            <Avatar src={`/agents/${playerInfo.character}.png`} radius="xl" />

            <div style={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                    {playerInfo.character}
                </Text>

                <Text color="dimmed" size="xs">
                    KD: {playerInfo.stats.kills}:{playerInfo.stats.deaths}
                </Text>
            </div>
        </Group>
    )
}