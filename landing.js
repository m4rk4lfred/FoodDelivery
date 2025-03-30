function showsignupModal() {
    let modal = document.querySelector('.modal-dialog');
    let close = document.querySelector('.closeModal-signup');
    let signButton = document.getElementById('signButton');

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