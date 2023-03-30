const useSBData = async (setter, api) => {
  const { data, error } = await api;
  if (error) {
    console.log("data retrieve error");
  }
  if (data) {
    setter(data);
  }
  console.log(data);
};

export default useSBData;
