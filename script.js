// User dropdown functionality
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

  // Cases Distribution Chart
  const casesCtx = document.getElementById("casesChart").getContext("2d");
  const casesChart = new Chart(casesCtx, {
    type: "doughnut",
    data: {
      labels: ["Casos por abrir", "Casos em aberto", "Casos concluídos"],
      datasets: [
        {
          data: [33, 44, 23],
          backgroundColor: ["#0056a6", "#ff6b00", "#28a745"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
            usePointStyle: true,
          },
        },
      },
    },
  });

  // Monthly Progress Chart
  const progressCtx = document.getElementById("progressChart").getContext("2d");
  const progressChart = new Chart(progressCtx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      datasets: [
        {
          label: "Casos Resolvidos",
          data: [12, 19, 15, 22, 18, 25, 30, 28, 32, 26, 30, 35],
          backgroundColor: "#0056a6",
          borderRadius: 5,
        },
        {
          label: "Casos Novos",
          data: [18, 22, 20, 25, 23, 28, 32, 30, 35, 30, 32, 38],
          backgroundColor: "#ff6b00",
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            drawBorder: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
});
