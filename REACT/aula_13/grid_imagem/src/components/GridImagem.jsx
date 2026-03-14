import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  border: 2px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }
`;

const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

function GridImagens() {

  const imagens = [
    "https://picsum.photos/400/300?1",
    "https://picsum.photos/400/300?2",
    "https://picsum.photos/400/300?3",
    "https://picsum.photos/400/300?4",
    "https://picsum.photos/400/300?5",
    "https://picsum.photos/400/300?6"
  ];

  return (
    <Grid>
      {imagens.map((img, index) => (
        <Card key={index}>
          <Imagem src={img} />
        </Card>
      ))}
    </Grid>
  );
}

export default GridImagens;