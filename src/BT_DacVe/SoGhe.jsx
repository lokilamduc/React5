import React from "react";
import { useDispatch, useSelector } from "react-redux";

function SoGhe() {
  const dispatch = useDispatch();

  const { seatList } = useSelector((state) => state.seat);

  const handleClick = (hang, soGhe) => {
    dispatch({
      type: "GHE_DANG_CHON",
      hang,
      soGhe,
    });
  };
  return (
    <ul>
      {seatList.map((item) => {
        return (
          <li className="mb-2">
            <span className="hangGhe px-3">{item.hang}</span>
            {item.danhSachGhe.map((seat) => {
              return (
                <button
                  key={seat.soGhe}
                  className={
                    seat.daDat
                      ? "seat full"
                      : seat.selected
                      ? "seat selected"
                      : "seat"
                  }
                  onClick={() => handleClick(item.hang, seat.soGhe)}
                  disabled={seat.daDat}
                ></button>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}

export default SoGhe;
