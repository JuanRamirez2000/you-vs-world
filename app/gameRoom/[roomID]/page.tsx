import ChessboardWrapper from "../../ChessboardWrapper";
import { Chess, Move } from "chess.js";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessBishop,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
} from "@fortawesome/free-regular-svg-icons";

export default function Page({ params }: { params: { roomId: string } }) {
  const chess = new Chess();
  chess.header("White", "Juan", "Black", "The Office");
  chess.move("e4");
  chess.move("e5");
  chess.move("Nf3");
  chess.move("Nf6");
  chess.move("Nc3");
  chess.move("Bb4");
  chess.move("Bc4");
  chess.move("O-O");
  chess.move("O-O");
  const whiteMoves = chess
    .history({ verbose: true })
    .filter((_, idx) => idx % 2 === 0);
  const blackMoves = chess
    .history({ verbose: true })
    .filter((_, idx) => idx % 2 === 1);
  return (
    <section>
      <div className="w-2/3 max-w-xl h-auto shadow-2xl">
        <ChessboardWrapper position={chess.fen()} />
      </div>
      <div className="w-2/3 max-w-xl h-fit">
        <Table className="shadow-lg border-2">
          <TableCaption>Juan Vs The Office</TableCaption>
          <TableHeader className="bg-stone-50">
            <TableRow>
              <TableHead className="text-4xl font-bold tracking-tight text-stone-600">
                {chess.header()["White"]}
              </TableHead>
              <TableHead className="text-4xl font-bold tracking-tight text-right text-stone-600">
                {chess.header()["Black"]}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {whiteMoves.map((_, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell>
                    <p className="flex flex-row items-baseline">
                      <span className="text-black mr-1 size-3.5">
                        {determinePiece(whiteMoves[idx])}
                      </span>
                      {whiteMoves[idx].san}
                    </p>
                  </TableCell>
                  <TableCell>
                    {blackMoves[idx] && (
                      <p className="flex flex-row items-baseline justify-end ">
                        {blackMoves[idx].san}
                        <span className="text-black ml-1 size-3.5">
                          {determinePiece(blackMoves[idx])}
                        </span>
                      </p>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div>{chess.fen()}</div>
      <div>{chess.pgn()}</div>
    </section>
  );
}

const determinePiece = (move: Move) => {
  const piece = move.piece;

  switch (piece) {
    case "b":
      return <FontAwesomeIcon icon={faChessBishop} />;
    case "p":
      return <FontAwesomeIcon icon={faChessPawn} />;
    case "r":
      return <FontAwesomeIcon icon={faChessRook} />;
    case "n":
      return <FontAwesomeIcon icon={faChessKnight} />;
    case "q":
      return <FontAwesomeIcon icon={faChessQueen} />;
    case "k":
      return <FontAwesomeIcon icon={faChessKing} />;
  }
};
