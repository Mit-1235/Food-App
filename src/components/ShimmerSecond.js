import { Skeleton } from "@mui/material";

const ShimmerSecond = () => {
  return (
    <div className="flex justify-center  ">
      <div className="flex flex-row flex-wrap w-[80%]  ">
        <div className="shimmer-card m-4 w-[210px] h-[270px]   ">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]   ">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]   ">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]   ">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
      </div>
    </div>
  );
};

export default ShimmerSecond;
