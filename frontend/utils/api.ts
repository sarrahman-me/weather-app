export async function GetDataApi(url: string): Promise<any> {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
