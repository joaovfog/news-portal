import Sponsor from "./Sponsor";

interface SponsorsProps {
  id?: number
  name?: string
  promotion?: string
}

const Sponsors: React.FC<SponsorsProps> = ({ id, name = 'Patrocinador', promotion = 'Descrição' }: SponsorsProps) => {
  return (
    <Sponsor
      key={id}
      name={name}
      promotion={promotion}
    />
  );
};

export default Sponsors;
