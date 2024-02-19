import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Tooltip from "react-tooltip";

type Seat = {
  id: number;
  reserved: boolean;
};

const SeatMap: React.FC = () => {
  const [seats, setSeats] = useState<Seat[]>(
      [
        { id: 0, reserved: false },
        { id: 1, reserved: false },
      ]
      
  );
  const [selected, setSelected] = useState<number[]>([]);
  const [totalprice, setTotalPrice] = useState<number>(1);
  const navigate = useNavigate();
  

  const toggleReservation = (id: number) => {
    setSeats(seats.map(seat => (seat.id === id ? { ...seat, reserved: !seat.reserved } : seat)));
    
    if (selected.includes(id)) {
      setSelected(selected.filter(seatId => seatId !== id));
      setTotalPrice(totalprice - 10); // assuming each seat costs $10
    } else {
      setSelected([...selected, id]);
      setTotalPrice(totalprice + 10);
    }
  };

//  const price = 30;
//  const totalprice = price * selected.length;
//  const addSeatCallback = ({ row, number, id }, addCb) => {
//    setSelected((prevItems) => [...prevItems, number]);
//    const newtooltip = `tooltip for id-${id} added by callback`;
//    addCb(row, number, id, newtooltip);
//  };

//  const removeSeatCallback = ({ row, number, id }, removeCb) => {
//    setSelected((list) => list.filter((item) => item !== number));
//    removeCb(row, number);
//  };


  return (
    <div>
      <div>
        {seats.map((seat) => (
          <button key={seat.id} onClick={() => toggleReservation(seat.id)} style={{ backgroundColor: seat.reserved ? 'red' : 'green' }}>
            Seat {seat.id + 1}
          </button>
        ))}
      </div>
      <div className="sidebar">
        {selected.length !== 0 && (
          <>
            <div className="seat-price">
              <div className="seat-select">
                <h1 className="seats-select">SEAT:{selected.toString()}</h1>
              </div>
              <div className="totalprice">
                <h1 className="price">
                  price:{"$"}
                  {totalprice}
                </h1>
              </div>
            </div>
            <button
              className="continue"
              onClick={() => navigate(`/Final/${selected}/${totalprice}`)}
            >
              continue
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SeatMap;
