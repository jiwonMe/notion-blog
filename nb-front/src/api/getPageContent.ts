const getPageContent = async (pageId: string) => {
  const apiUrl = `http://localhost:8800/api/v1/getPageContent/${pageId}`;
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

export default getPageContent;
