
export function displayProfile() {

    const profileString = localStorage.getItem('profile');
    
    if (profileString) {
        const profile = JSON.parse(profileString);
        
        // Set the profile information in the container
        document.getElementById('profile-avatar').src = profile.avatar || '../../../../src/img/avatar.png'; 
        document.getElementById('profile-name').textContent += profile.name;
        document.getElementById('profile-email').textContent += profile.email;
        document.getElementById('profile-credits').textContent += profile.credits;
        document.getElementById('profile-listings').textContent += profile._count.listings;
    } else {
        console.log("Profile not found in local storage.");
    }
}
