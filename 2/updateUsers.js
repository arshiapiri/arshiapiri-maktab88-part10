const editBtn = $("#editBtn");
const removeBtn = $("#removeBtn");
const updateBtn = $("#updateBtn");
const closeBtn = $("#closeBtn");

editBtn.on("click", function () {
    editBtn.addClass("d-none");
    removeBtn.removeClass("d-none");
    updateBtn.removeClass("d-none");   
});

closeBtn.on("click", function () {
    editBtn.removeClass("d-none");
    removeBtn.addClass("d-none");
    updateBtn.addClass("d-none");  
});

updateBtn.on("click", function () {
    const GenerateProfileInformation = ({id, email,avatar,first_name,last_name}) => {
        return `
        <ul class="list-group list-group-flush my-4">
            <img src="${avatar}" class="card-img-top p-2 rounded-4" alt='${id}'>
            <label for="fname">${first_name}</label>
            <input type="text" placeholder="Enter your First name" class="form-control" name="fname" id="fname">
                <li class="list-group-item"> <i class="fa fa-id-card"></i> ${id}</li>
                <li class="list-group-item"><i class="fa-solid fa-envelope"></i> ${email}</li>
        </ul>
        `
        }
})
