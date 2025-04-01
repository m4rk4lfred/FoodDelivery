function showloginModal() {
    let modal = document.querySelector('.loginDialog');
    let close = document.querySelector('.loginClose');
    let loginButton = document.getElementById('loginButton');

    // Open the modal when the signup button is clicked
    loginButton.addEventListener('click', function () {
        modal.show();
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        setTimeout(()=>{
            modal.style.opacity = '1';
            
        },100);
    });

    // Close the modal when the close button is clicked
    close.addEventListener('click', function () {
        modal.close();
        modal.style.display = 'none';

        modal.style.display = 'flex';
        modal.style.visibility = 'hidden';
        setTimeout(()=>{
            modal.style.opacity = '0';
            
        },100);

    });
}

function showsignupModal(buttonName) {
    let modal = document.querySelector('.modal-dialog');
    let close = document.querySelector('.signupClose');
    let signButton = document.getElementById(buttonName);
    
  
    // Open the modal when the signup button is clicked
    signButton.addEventListener('click', function () {
        modal.show();
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        setTimeout(()=>{
            modal.style.opacity = '1';
            
        },100);
    });

    // Close the modal when the close button is clicked
    close.addEventListener('click', function () {
        modal.close();
        modal.style.display = 'none';

        modal.style.display = 'flex';
        modal.style.visibility = 'hidden';
        setTimeout(()=>{
            modal.style.opacity = '0';
            
        },100);

    });
}

// Call the function to attach event listeners
showsignupModal();
showloginModal();