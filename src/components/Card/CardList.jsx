import React, { useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useScroll, QUERY_KEY_INFINITE } from "../../service/query/useScroll";
import { getMatches } from "../../service/apis/getMatches";
import styled from "styled-components";
import Card from "./Card";

const CardList = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY_INFINITE],
    queryFn: ({ pageParam = 1 }) => getMatches(pageParam),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  const intObserver = useRef();
  const lastCardRef = useCallback(
    card => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver(cards => {
        if (cards[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          fetchNextPage();
        }
      });

      if (card) intObserver.current.observe(card);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === "error")
    return <p className="center">Error: {error.message}</p>;

  const card = data?.pages.map(page => {
    return page.map((item, i) => {
      if (page.length === i + 1) {
        return <Card ref={lastCardRef} key={item.id} item={item} />;
      }
      return <Card key={item.id} item={item} />;
    });
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Top className="#top" />
      <Wrapper>{card}</Wrapper>
      {isFetchingNextPage && <p className="center">Loading More Posts...</p>}
      <p className="center">
        <button onClick={scrollToTop}>top</button>
      </p>
    </div>
  );
};

export default CardList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(0, calc((100vw- 48px) / 4 * 4 / 3));
  grid-row-gap: 36px;
  grid-column-gap: 24px;
  padding: 40px;

  @media screen and (max-width: 1126px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 100%;
    padding: 24px;
  }
`;

const Top = styled.div`
  display: none;
`;
