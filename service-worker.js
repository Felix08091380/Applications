function checkReminders() {
  const now = Date.now();
  const notes = JSON.parse(localStorage.getItem(notesKey)) || [];
  let updated = false;

  for (let note of notes) {
    if (note.reminder && now >= note.reminder && !note.notified) {
      // Показываем уведомление
      if (Notification.permission === 'granted') {
        new Notification('Напоминание', {
          body: note.text,
          icon: 'icon-192.png'
        });
      } else {
        alert('🔔 Напоминание: ' + note.text);
      }

      note.notified = true;
      updated = true;
    }
  }

  if (updated) {
    localStorage.setItem(notesKey, JSON.stringify(notes));
    renderNotes();
  }
}
