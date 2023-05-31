import { atom, selector } from "recoil";

export const navFilterAtom = atom({
  key: `navFilterAtom`,
  default: {
    position: -1,
    district: 0,
    date: ``,
    time: ``,
    parking: 0,
    provide: [false, false, false],
    court: 0,
  },
});

export const querySelector = selector({
  key: `querySelector`,
  get: ({ get }) => {
    const { district, date, time, parking, provide, court } =
      get(navFilterAtom);
    const query = [];

    if (district) query.push(`districtId=${district}`);
    if (date) query.push(`date=${date}`);
    if (time) query.push(`time=${time}`);
    if (parking) query.push(`parkingId=${parking}`);
    if (provide[0]) query.push(`rentalEquip=${provide[0]}`);
    if (provide[1]) query.push(`showerFacility=${provide[1]}`);
    if (provide[2]) query.push(`hasAmenities=${provide[2]}`);
    if (court) query.push(`courtTypeId=${court}`);

    return query.join(`&`);
  },
});
