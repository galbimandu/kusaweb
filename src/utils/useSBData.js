const useSBData = async (setter, api) => {
  const { data, error } = await api;
  if (error) {
    console.log("data retrieve error");
  }
  if (data) {
    setter(data);
  }
};

export default useSBData;
