import { Loader as LoaderMantine} from '@mantine/core';
import Content from './Content';

export default function Loader() {
    return (
        <Content>
            <LoaderMantine style={{margin: 'auto'}}/>           
        </Content>
    )
}