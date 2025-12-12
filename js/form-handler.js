      const contactForm = document.getElementById("contact-form");
      const successModalEl = document.getElementById("successModal");
      const errorModalEl = document.getElementById("errorModal");
      const connectionErrorModalEl = document.getElementById(
        "connectionErrorModal"
      );

      let successModal = null;
      let errorModal = null;
      let connectionErrorModal = null;

      if (successModalEl && window.bootstrap && bootstrap.Modal) {
        successModal = new bootstrap.Modal(successModalEl);
      }

      if (errorModalEl && window.bootstrap && bootstrap.Modal) {
        errorModal = new bootstrap.Modal(errorModalEl);
      }

      if (connectionErrorModalEl && window.bootstrap && bootstrap.Modal) {
        connectionErrorModal = new bootstrap.Modal(connectionErrorModalEl);
      }

      if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
          e.preventDefault();

          const data = new FormData(contactForm);

          try {
            const response = await fetch(contactForm.action, {
              method: contactForm.method,
              body: data,
              headers: { Accept: "application/json" },
            });

            if (response.ok) {
              contactForm.reset();
              if (successModal) {
                successModal.show();
              } else {
                alert("The form was submitted successfully. Thank you!");
              }
            } else {
              if (errorModal) {
                errorModal.show();
              } else {
                alert("Something went wrong. Please try again later.");
              }
            }
          } catch (error) {
            if (connectionErrorModal) {
              connectionErrorModal.show();
            } else {
              alert("Check your network connection and try again.");
            }
          }
        });
      }