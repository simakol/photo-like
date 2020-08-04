export default async function getPhotos() {
  const photoData = await fetch("https://jsonplaceholder.typicode.com/photos/")
    .then(data => data.json())
    .then(photosData => photosData.splice(0, 7));
  let postArr = [];
  for (let i = 0; i < photoData.length; i++) {
    postArr.push({
      id: photoData[i].id - 1,
      img: photoData[i].url,
      description:
        photoData[i].title.length >= 8
          ? photoData[i].title
              .split(" ")
              .splice(0, 7)
              .join(" ")
          : photoData[i].title,
      likes: 0
    });
  }
  return postArr;
}
