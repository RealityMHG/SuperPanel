// Tab functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Remove active class from all tabs and contents
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to current tab and content
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Notification dropdown functionality
  const userDropdown = document.querySelector(".user-dropdown");
  const userTrigger = document.querySelector(".user-trigger");
  const notificationDropdown = document.querySelector(".notification-dropdown");
  const notificationTrigger = document.querySelector(".notification-trigger");

  // User dropdown
  userTrigger.addEventListener("click", function (e) {
    e.stopPropagation();
    userDropdown.classList.toggle("active");
    notificationDropdown.classList.remove("active");
  });

  // Notification dropdown
  notificationTrigger.addEventListener("click", function (e) {
    e.stopPropagation();
    notificationDropdown.classList.toggle("active");
    userDropdown.classList.remove("active");
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    userDropdown.classList.remove("active");
    notificationDropdown.classList.remove("active");
  });

  // Mark notifications as read when clicked
  const notificationItems = document.querySelectorAll(".notification-item");
  notificationItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.remove("unread");
      updateNotificationBadge();
    });
  });

  function updateNotificationBadge() {
    const unreadNotifications = document.querySelectorAll(
      ".notification-item.unread"
    ).length;
    const badge = document.querySelector(".notification-badge");

    if (unreadNotifications > 0) {
      badge.textContent = unreadNotifications;
      badge.style.display = "flex";
    } else {
      badge.style.display = "none";
    }
  }

  // Sticky notes functionality
  const stickyNotesPanel = document.querySelector(".sticky-notes-panel");
  const toggleNotesBtn = document.querySelector(".toggle-notes-btn");
  const notesTextarea = document.querySelector(".notes-content textarea");
  const saveNotesBtn = document.querySelector(".save-notes-btn");
  const clearNotesBtn = document.querySelector(".clear-notes-btn");
  const savedNotesContainer = document.querySelector(".saved-notes");

  toggleNotesBtn.addEventListener("click", function () {
    stickyNotesPanel.classList.toggle("minimized");
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-chevron-up");
    icon.classList.toggle("fa-chevron-down");
  });

  saveNotesBtn.addEventListener("click", function () {
    const noteText = notesTextarea.value.trim();
    if (noteText) {
      const now = new Date();
      const dateString =
        now.toLocaleDateString("pt-PT") +
        " " +
        now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });

      const noteItem = document.createElement("div");
      noteItem.className = "note-item";
      noteItem.innerHTML = `
        <div class="note-date">${dateString}</div>
        <div class="note-text">${noteText}</div>
      `;

      savedNotesContainer.appendChild(noteItem);
      notesTextarea.value = "";

      // Show success message
      showNotification("Nota guardada com sucesso!", "success");
    }
  });

  clearNotesBtn.addEventListener("click", function () {
    notesTextarea.value = "";
  });

  // Service checkboxes - sync with tabs
  const serviceCheckboxes = document.querySelectorAll('input[name="services"]');
  serviceCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const serviceId = this.id;
      const tabBtn = document.querySelector(`[data-tab="${serviceId}-tab"]`);

      if (tabBtn) {
        if (this.checked) {
          tabBtn.style.display = "flex";
        } else {
          tabBtn.style.display = "none";
          // If this tab is active, switch to first visible tab
          if (tabBtn.classList.contains("active")) {
            const firstVisibleTab =
              document.querySelector('.tab-btn[style=""]') ||
              document.querySelector('.tab-btn:not([style*="display: none"])');
            if (firstVisibleTab) {
              firstVisibleTab.click();
            }
          }
        }
      }
    });
  });

  // Get NIF from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const nif = urlParams.get("nif");
  if (nif) {
    document.getElementById("nif-number").textContent = nif;
  }

  function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.className = `notification-toast ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      background: ${type === "success" ? "#28a745" : "#dc3545"};
      color: white;
      border-radius: 6px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});
