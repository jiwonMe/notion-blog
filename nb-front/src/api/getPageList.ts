const getPageList = async () => {
  const apiUrl = 'http://localhost:8800/api/v1/getPageList';
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export default getPageList;
