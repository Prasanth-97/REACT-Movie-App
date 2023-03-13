import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
 <IconButton onClick={() => setLike(like + 1)} aria-label="like movie" color="primary"><Badge badgeContent={like} color="primary">
  👍
</Badge></IconButton>
<IconButton onClick={() => setDislike(dislike + 1)} aria-label="dislike movie" color="error"> <Badge badgeContent={dislike} color="error">
      👎
    </Badge></IconButton>
      {/* <p>{like}</p> */}
    </div>
  );
}
