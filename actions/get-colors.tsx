import { Color } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((res) => res.json()).then((data) => {
    return data;
  });

  return res
};

export default getColors;
