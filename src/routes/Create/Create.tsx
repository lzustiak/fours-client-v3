import { createStore, unwrap } from "solid-js/store";
import { createGame } from "@api/endpoints/game";
import styles from "./Create.module.scss";

export default function Create() {
  const [fields, setFields] = createStore({
    name: "",
    gameId: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    console.log(unwrap(fields));

    const { gameId, name } = unwrap(fields);

    const game = await createGame({ gameId, player: { id: "1", name } });

    console.log(game);
  };

  const update = ({ target }) => {
    const { name: _name, value } = target;
    setFields((prev) => ({ ...prev, [_name]: value }));
  };

  return (
    <div class={styles.container}>
      <h1 class={styles.header}>Create</h1>
      <form onSubmit={submit}>
        <label for="gameId">Game Id</label>
        <input type="text" id="gameId" name="gameId" onInput={update} />
        <label for="name">Name</label>
        <input type="text" id="name" name="name" onInput={update} />
        <button>Create</button>
      </form>
    </div>
  );
}
