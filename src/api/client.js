export const fetchJdList = async (body) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  
  const res = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
  const result = await res?.json();
  return result;
};
