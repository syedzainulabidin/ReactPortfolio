const storage = (status, title, note, card) => {
  if (status) {
    localStorage.setItem(`title-${card}`, title);
    localStorage.setItem(`note-${card}`, note);
  }
};

export default storage;
