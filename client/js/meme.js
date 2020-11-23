// Converts any given blob into a base64 encoded string.
function convertBlobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

async function fetchImageAndDisplay() {
  try {
    const fetchResult = await fetch(`https://meme-api.herokuapp.com/gimme`);
    const json = await fetchResult.json();
    document.getElementById("meme").src = json.preview[json.preview.length - 1];
  } catch (error) {
    console.log(error);
  }
}

fetchImageAndDisplay();
