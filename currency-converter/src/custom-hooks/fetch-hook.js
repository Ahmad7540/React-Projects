
  async function fetchingData(curencyType) {
    let responce = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${curencyType}.json`
    );
    let data = await responce.json();
    return data;
  }


export default fetchingData;
