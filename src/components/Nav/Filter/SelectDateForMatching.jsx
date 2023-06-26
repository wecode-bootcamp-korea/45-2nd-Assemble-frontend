import React from "react";
import ReactDatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { ko } from "date-fns/locale";
import format from "date-fns/format";
import { useRecoilState } from "recoil";
import { matchingNavFilterAtom } from "../../../recoil/matchingNavFilterAtom";

const SelectDateForMatcing = () => {
  const [query, SetQuery] = useRecoilState(matchingNavFilterAtom);

  const saveDate = item => {
    SetQuery(format(item, "yyyy-MM-dd"));
  };
  return (
    <ReactDatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      selected={query ? new Date(query) : ``}
      minDate={new Date()}
      maxDate={addDays(new Date(), 6)}
      showDisabledMonthNavigation
      onChange={saveDate}
      inline
    >
      <div>현재 날짜를 기준으로 6일후까지만 선택이 가능합니다.</div>
    </ReactDatePicker>
  );
};

export default SelectDateForMatcing;
