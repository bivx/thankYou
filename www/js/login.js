(function() {}).render({
  "login": (function() {
    (function() {
      const login = document.getElementById('login');
      const repeatPassword = document.getElementById('register');
      const errorMessage = document.getElementById("form-error");
      login.addEventListener('click', function() {
        var email = document.getElementsByClassName('form-control')[1].value;
        var password = document.getElementsByClassName('form-control')[2].value;
        var params = {
          "email": email,
          "password": password,
        };

        (function() {}).ajax("post", '/login', params, function(data) {
          var data = JSON.parse(data);
          if (data.message === "success") {
            window.loged = data.email;
            window.location.href = window.location.origin + "/#/comment";
            document.getElementsByClassName('list-account')[0].style.display = "block";
            document.getElementsByClassName('list-comment')[0].style.display = "block";
          } else {
            errorMessage.textContent = data.message;
            errorMessage.style.display = "block";
          }
        })
      }, false);

      const newRegister = document.getElementsByClassName("btn-register")[0];
      newRegister.addEventListener("click", function() {
        newRegister.style.display = "none";
        repeatPassword.style.display = "table";

        const register = document.getElementsByClassName("register-now")[0];
        document.getElementsByClassName("wraper-register")[0].style.display = "block";
        login.style.display = "none";
        register.addEventListener("click", function() {
          var email = document.getElementsByClassName('form-control')[1].value;
          var password = document.getElementsByClassName('form-control')[2].value;
          const passwordRepeatBtn = document.getElementsByClassName('password')[0].value;
          var params = {
            "email": email,
            "password": password,
            "repeatPassword": passwordRepeatBtn
          };
          (function() {}).ajax("post", '/register', params, function(data) {
            var data = JSON.parse(data);
            if (data.message === "success") {
              window.loged = data.email;
              document.getElementsByClassName('list-account')[0].style.display = "block";
              document.getElementsByClassName('list-comment')[0].style.display = "block";
              window.location.href = window.location.origin + "/#/napisz";
            } else {
              errorMessage.textContent = data.message;
              errorMessage.style.display = "block";
            }
          })
        }, false);
      }, false);

      if (window.loged) {
        const login = document.getElementsByClassName("form-wrap")[0];
        login.style.display = "none";
        const logout = document.getElementsByClassName("wraper-logout")[0];
        logout.style.display = "block";
        const btnLogout = document.getElementsByClassName('quit')[0];
        btnLogout.addEventListener("click", function() {
          window.loged = "";
          logout.style.display = "none";
          login.style.display = "block";
          document.getElementsByClassName("list-account")[0].style.display = "none";
          document.getElementsByClassName("list-comment")[0].style.display = "none";
        }, false)
      }
    })();
  })
});
