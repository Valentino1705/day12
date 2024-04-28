let dataList = []
const projectContainer = document.getElementById('project-list')

const submitData = () => {
    const projectName = document.getElementById('project-name').value
    const startDate = document.getElementById('start-date').value
    const endDate = document.getElementById('end-date').value
    const description = document.getElementById('description').value

    const data = {
        projectName,
        startDate,
        endDate,
        description
    }

    if(!projectName || !startDate || !endDate || !description) {
        alert('wajib isi semua form')
        return
    }

    dataList.push(data)

    console.log('data', data)
    projectContainer.innerHTML += `
        <div class="p-2 col-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${data.projectName}</h5>
                <p class="card-text mb-0">${data.description}</p>
                <p class="card-text mb-0">${data.startDate}</p>
                <p class="card-text mb-0">${data.endDate}</p>
                </div>
            </div>
        </div>
    `
}