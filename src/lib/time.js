function getCurrentTime() {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // getMonth() 0 dan boshlanadi
  const year = now.getFullYear().toString().slice(-2); // Yilning oxirgi 2 raqami

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}


export const currentTime = getCurrentTime();
