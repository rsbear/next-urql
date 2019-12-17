import React, { FC } from "react";
import { useKeyboardsQuery, Keyboard } from "../generated/graphql";
import withUrqlClient from "../lib/withUrqlClient";

const Home: FC<any> = () => {
  const [{ fetching, error, data }] = useKeyboardsQuery();
  return (
    <div>
      {fetching && <h2>Still fetching</h2>}
      {error && <h2>Oops, something wong.</h2>}
      {!fetching && !error && data && data.keyboards && (
        <div>
          {data.keyboards.map((k: Keyboard) => (
            <div key={k.id}>
              <h2>{k.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default withUrqlClient(Home);
