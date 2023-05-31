import React from "react";
import ReactDatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { ko } from "date-fns/locale";
import format from "date-fns/format";
import { useRecoilState } from "recoil";
import { navFilterAtom } from "../../../recoil/navFilterAtom";

const SelectDate = () => {
  const [navFilte, setNavFilte] = useRecoilState(navFilterAtom);

  return (
    <ReactDatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      selected={navFilte.date ? new Date(navFilte.date) : ``}
      minDate={new Date()}
      maxDate={addDays(new Date(), 6)}
      showDisabledMonthNavigation
      onChange={item =>
        setNavFilte({
          ...navFilte,
          date:
            format(item, "yyyy-MM-dd") === navFilte.date
              ? ``
              : format(item, "yyyy-MM-dd"),
        })
      }
      inline
    >
      <div>현재 날짜를 기준으로 6일후까지만 선택이 가능합니다.</div>
    </ReactDatePicker>
  );
};

export default SelectDate;
