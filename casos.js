// User dropdown and notification functionality
document.addEventListener("DOMContentLoaded", function () {
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

  // Pagination functionality
  const paginationBtns = document.querySelectorAll(".pagination-btn");
  paginationBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      paginationBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
