import { client } from "../client";

type LobbyState = "idle" | "waiting" | "playing";

type Player = {
  id: string;
  name: string;
};

type Players = {
  0: Player;
  1?: Player;
};

type GameState = {
  id: string;
  state: LobbyState;
  players: Players;
};

export const createGame = async (payload: {
  gameId: string;
  player: Player;
}): Promise<GameState | undefined> => {
  try {
    const res = await client.post<GameState>("/game/create", { payload });

    if (!res.ok) return; //handle errors here

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const joinGame = async (payload: {
  gameId: string;
  player: Player;
}): Promise<GameState | undefined> => {
  try {
    const res = await client.post<GameState>("/game/join", { payload });

    if (!res.ok) return; //handle errors here

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
