document.addEventListener("DOMContentLoaded", function () {
  // Enrollment buttons
  const enrollButtons = document.querySelectorAll(".enroll-button");

  enrollButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const courseTitle =
        this.closest(".course-card").querySelector("h3").textContent;
      alert(`Inscrição no curso "${courseTitle}" realizada com sucesso!`);
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> A Carregar...';
      this.disabled = true;

      // Simular processamento
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-check"></i> Inscrito com Sucesso';
        this.style.background = "var(--success)";
      }, 1500);
    });
  });

  // Header functionality
  const userDropdown = document.querySelector(".user-dropdown");
  const userTrigger = document.querySelector(".user-trigger");
  const notificationDropdown = document.querySelector(".notification-dropdown");
  const notificationTrigger = document.querySelector(".notification-trigger");

  // User dropdown
  if (userTrigger) {
    userTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      userDropdown.classList.toggle("active");
      if (notificationDropdown) notificationDropdown.classList.remove("active");
    });
  }

  // Notification dropdown
  if (notificationTrigger) {
    notificationTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      notificationDropdown.classList.toggle("active");
      if (userDropdown) userDropdown.classList.remove("active");
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    if (userDropdown) userDropdown.classList.remove("active");
    if (notificationDropdown) notificationDropdown.classList.remove("active");
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
});
