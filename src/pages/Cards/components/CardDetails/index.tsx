import { useCardStore } from "@src/store/card";
import { Table, TableBody, TableCell, TableRow } from "./styles";

export const CardDetails: React.FC<{ currentCard: string }> = ({
  currentCard,
}) => {
  const card = useCardStore((s) => s.cards.find((c) => c.id === currentCard));
  //no mocks were there so i just created a random table
  return (
    <Table>
      <TableBody>
        {card &&
          Object.entries(card).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{String(value)}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
