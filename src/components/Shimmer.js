import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";
// import {ThemeProvider, createTheme} from "@mui/material";

const Shimmer = () => {
  return (
    <div className="shimmer flex w-[100%] flex-col justify-center items-center">
      <div className=" w-[100%] h-[100%] flex justify-center align-middle">
        <div className="w-[100%] h-[60vh] mb-8">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            width="100%"
            height="100%"
            animation="wave"
            variant="rectangular"
          />
        </div>
      </div>
      <div className="w-[75%] h-[100%] flex justify-center align-middle">
        <div className="w-[100%] h-[350px] ">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={273}
            height={182}
          />
          <Skeleton width="70%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="30%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="50%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="w-[100%] h-[350px] ">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={273}
            height={182}
          />
          <Skeleton width="70%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="30%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="50%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="w-[100%] h-[350px] ">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={273}
            height={182}
          />
          <Skeleton width="70%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="30%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="50%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
      </div>
      <div className="shimmer-container w-[90%] h-[100%] flex justify-center flex-wrap ">
        <div className="shimmer-card m-4 w-[210px] h-[270px]">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]">
          <Skeleton
            sx={{ bgcolor: "#E4EBFF" }}
            variant="rounded"
            width={210}
            height={140}
          />
          <Skeleton width="90%" sx={{ bgcolor: "#E4EBFF" }} />
          <Skeleton width="60%" sx={{ bgcolor: "#E4EBFF" }} />
        </div>
        <div className="shimmer-card m-4 w-[210px] h-[270px]">
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

export default Shimmer;
