// JavaScript to handle real-time claim updates and alerts

// Function to set custom alerts
function setAlert() {
    alert("Custom alert set! You will receive notifications for claim updates and appointment reminders.");
  }
  
  // Function to handle document upload
  function uploadDocuments() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/pdf,image/*";
    fileInput.click();
  
    fileInput.onchange = () => {
      alert("Documents uploaded successfully.");
    };
  }
  
  // Simulate real-time claim status update
  function updateClaimStatus(status) {
    document.getElementById("claim-status").innerText = status;
  }
  
  // Initialize claim status
  setInterval(() => {
    const statuses = ["Claim Pending...", "Claim Approved!", "Claim Denied"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    updateClaimStatus(randomStatus);
  }, 5000); // Update every 5 seconds
  