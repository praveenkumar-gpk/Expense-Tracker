function handleCLick(event)
{
    event.preventDefault();
    let newlist = document.createElement('li');
    let expense = document.getElementById('expense').value;
    let description = document.getElementById('description').value;
    let dropdown = document.getElementById('dropdown').value;
    newlist.innerHTML = expense+'-'+description+'-'+dropdown+'<button type="button"id="${description}" onclick="handledit(event)">Edit</button> <button type="button" id="${description}" onclick="handledelete(event)">Delete</button>';
    document.getElementById('list').appendChild(newlist);
    localStorage.setItem(description,newlist);
}
function handledit(event)
{
    let parent = event.currentTarget.parentNode;
    console.log(parent)
}
function handledelete(event)
{
    let parent = event.currentTarget.parentNode;
    document.getElementById('list').removeChild(parent);
    console.log(event.currentTarget.id);
    
}