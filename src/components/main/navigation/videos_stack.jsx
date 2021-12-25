import { useEffect } from "react/cjs/react.development";
import usePagination from "../../../hooks/usePagination";
import styles from "./styles/videos_stack.css"
import VideoItem from "./video_item"

function VideosStack({videos, searchQuery, tagQuery, levelQuery}) {
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        lastPage,
        firstPage,
        page,
        setPage,
        totalPages,
      } = usePagination({
        contentPerPage: 12,
        count: videos.length,
    });

    useEffect(() => {
        setPage(1);
    }, [searchQuery, tagQuery, levelQuery])

    if (videos.length === 0) {
        return (
            <h1>Видео не найдены</h1>
        )
    }
    else {
        return (
            <div className="paginator">
                <div className="videos_stack" id="video_stack">
                    {videos
                    .slice(firstContentIndex, lastContentIndex)
                    .map(video => {
                        return <VideoItem video={video} key={video.id}/>
                    })}
                </div>
                <div className="pagination">
                    <div>
                        <button onClick={prevPage} className="page left-arrow">
                            &#129128;
                        </button>
                        <button onClick={firstPage} className="page">
                            {1}
                        </button>
                    </div>

                    <div>
                        {[...Array(totalPages).keys()]
                        .filter((el) => el + 1 >= page - 3 && el + 1 <= page + 3)
                        .map((el) => (
                            <button
                            onClick={() => setPage(el + 1)}
                            key={el}
                            className={`page ${page === el + 1 ? "active" : ""}`}
                            >
                            {el + 1}
                            </button>
                        ))}
                    </div>

                    <div>
                        <button onClick={lastPage} className="page">
                            {totalPages}
                        </button>
                        <button onClick={nextPage} className="page right-arrow">
                            &#129130;
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideosStack