let userData = [];
  for (let i = 1; i <= 2; i++) {
    $.ajax({
      url: `https://reqres.in/api/users?page=${i}`,
      type: "get",
      async: false,
      success: function (response) {
        for (const user of response.data) {
          userData.push(user);
        }
      },
    });
  }
console.log(userData);  