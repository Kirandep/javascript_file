const token = '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';
const username = 'Kirandep';
const url = `https://api.github.com/users/${username}`;

fetch(url, {
  headers: {
    'Authorization': `token ${token}`
  }
})
.then(response => {
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});