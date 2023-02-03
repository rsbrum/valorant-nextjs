import { useState, useEffect } from "react";
import Leaderboard from '@/components/home/Leaderboard';
import { useGetLeaderboardInfoQuery } from '@/redux/apiSlice';
import { ILeaderboardItem } from "@/typings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setAllLeaderboardItems } from "@/redux/leaderboard"
import Content from "@/components/ui/Content";
import { Loader } from '@mantine/core';
import ErrorText from "@/components/layout/ErrorText";

export default function Home() {
  const [leaderboardItems, setLeaderboardItems] = useState<ILeaderboardItem[]>([] as ILeaderboardItem[])
  const { allLeaderboardItems } = useSelector((state: RootState) => state.leaderboard);
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    isSuccess,
    isError
  } = useGetLeaderboardInfoQuery();

  function updateLeaderboardItems() {
    const slice = allLeaderboardItems.slice(leaderboardItems.length, leaderboardItems.length + 1000);
    setLeaderboardItems((prevState) => prevState.concat(slice));
  }

  useEffect(() => {
    if (!isSuccess)
      return;

    dispatch(setAllLeaderboardItems(data.players));

    const initialValues = data.players.slice(0, 1000);
    setLeaderboardItems(initialValues);

  }, [data]);

  if (isError) {
    return (
      <ErrorText text={"There was an error loading the leaderboard data"} />
    )
  }
  if (isLoading) {
    return (
      <Content>
        <div style={{ margin: 'auto' }}>
          <Loader />
        </div>
      </Content>
    )
  }

  return (
    <Content>
      <Leaderboard next={updateLeaderboardItems} leaderboardItems={leaderboardItems} />
    </Content>
  )
} 
