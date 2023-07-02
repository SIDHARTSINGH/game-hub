const getCroppedImageurl = (url: string) => {
  if (!url) return;
  const index = url.indexOf("media/") + "media/".length;
  const croppedImageUrl =
    url.slice(0, index) + "crop/600/400/" + url.slice(index);

  return croppedImageUrl;
};

export default getCroppedImageurl;
