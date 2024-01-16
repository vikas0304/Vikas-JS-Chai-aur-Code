console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
        <table>
            <tr>
                <th>KEY</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
            
        </table>
    `
})
