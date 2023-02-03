import { createStyles, Group } from '@mantine/core';
import LeaderboardItem from './LeaderboardItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ILeaderboardItem } from '@/typings';
import Loader from '../ui/Loader';

interface ILeaderboardProps {
  next(): void,
  leaderboardItems: ILeaderboardItem[]
}

export default function Leaderboard({ next, leaderboardItems }: ILeaderboardProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.infiniteScrollContainer}>
      <InfiniteScroll
        className={classes.infiniteScrollContainer}
        dataLength={leaderboardItems.length}
        next={next}
        hasMore={true}
        loader={<Loader />}
        style={{
          width: '100%'
        }}
      >
        <ul>
          {leaderboardItems.map((item: ILeaderboardItem, index) => {
            return (
              <LeaderboardItem item={item} key={index} />
            )
          })}
        </ul>
      </InfiniteScroll>
    </div>


  )
}

const useStyles = createStyles((theme) => ({
  infiniteScrollContainer: {
    width: '100%'
  }
}));