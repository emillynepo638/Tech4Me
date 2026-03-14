import interestelar from "../assets/filmes/interstelar.png";
import vingadores from "../assets/filmes/vingadores.jpg";
import jogosvorazes from "../assets/filmes/jogosvorazes.jpg";
import velozes from "../assets/filmes/velozes.jpg";

const filmes = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção científica",
    ano: 2014,
    diretor: "Christopher Nolan",
    imagem: interestelar,
    sinopse:
      "Uma equipe de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.",
  },
  {
    id: 2,
    titulo: "Vingadores: Ultimato",
    genero: "Ação",
    ano: 2019,
    diretor: "Anthony e Joe Russo",
    imagem: vingadores,
    sinopse:
      "Os heróis restantes se unem para desfazer os danos causados por Thanos e restaurar o universo.",
  },
  {
    id: 3,
    titulo: "Jogos Vorazes",
    genero: "Aventura",
    ano: 2012,
    diretor: "Gary Ross",
    imagem: jogosvorazes,
    sinopse:
      "Katniss Everdeen se oferece para participar de uma competição mortal televisionada em seu país.",
  },
  {
    id: 4,
    titulo: "Velozes e Furiosos 7",
    genero: "Ação",
    ano: 2015,
    diretor: "James Wan",
    imagem: velozes,
    sinopse:
      "Dom e sua equipe enfrentam um inimigo perigoso em uma missão cheia de velocidade e adrenalina.",
  },
];

export default filmes;