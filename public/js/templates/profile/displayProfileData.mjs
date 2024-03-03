

document.addEventListener('DOMContentLoaded', () => {
    displayProfile();
});

export function displayProfile() {
    // Retrieve the profile from local storage
    const profileString = localStorage.getItem('profile');
    
    if (profileString) {
        const profile = JSON.parse(profileString);
        
        // Set the profile information in the container
        document.getElementById('profile-avatar').src = profile.avatar || 'path/to/default/avatar.jpg'; // Provide a default avatar if none is set
        document.getElementById('profile-name').textContent += profile.name;
        document.getElementById('profile-email').textContent += profile.email;
        document.getElementById('profile-credits').textContent += profile.credits;
        document.getElementById('profile-wins').textContent += profile.wins.join(', ');
        document.getElementById('profile-listings').textContent += profile._count.listings;
    } else {
        console.log("Profile not found in local storage.");
        // Handle the case where the profile is not found
    }
}
