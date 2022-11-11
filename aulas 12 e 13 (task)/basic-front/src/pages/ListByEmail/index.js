import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

import ClientUsers from "../../services/user.js";

import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";

import "./style.css";

export default function ListByEmail() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});

  async function handleGet(e) {
    e.preventDefault();

    const data = {
      email: email,
    };

    const update = await ClientUsers.getUserByEmail(data);
    console.log("update", update);
    if (update.status === 200) {
      setUser(update.data);
      toast.success("Usuário encontrado com sucesso!");
    } else {
      toast.error("Ops algo deu errado!");
    }
  }

  return (
    <div>
      <Sidebar />

      <div className="content">
        <Title name="Pesquisar usuário">
          <FaSearch size={30} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleGet}>
            <label>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Pesquisar</button>
            <p> {user.nome} </p>
            <p> {user.email} </p>
          </form>
        </div>
      </div>
    </div>
  );
}
