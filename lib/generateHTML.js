function generateHTML(data) {
  var content = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Emploee Profile Creator</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
	</head>

	<body>
		<header class="col-12 jumbotron mb-3 bg-danger text-light">
			<h1 class="text-center">My Employees</h1>
		</header>

		<div class="container">
			<div class="row">
				<div class="team-area col-12 d-flex justify-content-center">
  `;

  var ending = `
        </div>
      </div>
		</div>
		<script src="https://kit.fontawesome.com/c502137733.js"></script>
	</body>
</html>`;
  
  for (let i = 0; i < data.length; i++) {
    var employee = "";
		if (data[i].getRole() == "Manager") {
			employee = `
					<div class="card">
						<div class="card-header">
							<h2 class="card-title">${data[i].name}</h2>
							<h3><i class="fas fa-mug-hot mr-2"></i> Manager</h3>
						</div>
						<div class="card-body">
							<ul class="list-group">
								<li class="list-group-item">ID: ${data[i].id}</li>
								<li class="list-group-item"> Email:
									<a href="mailto:${data[i].email}">${data[i].email}</a>
								</li>
								<li class="list-group-item">Office number: ${data[i].officeNumber}</li>
							</ul>
						</div>
					</div>`;
		} else if (data[i].getRole() == "Engineer") {
			employee = `
					<div class="card">
						<div class="card-header">
							<h2 class="card-title">${data[i].name}</h2>
							<h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
						</div>
						<div class="card-body">
							<ul class="list-group">
								<li class="list-group-item">ID: ${data[i].id}</li>
								<li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
								<li class="list-group-item">GitHub: <a href="https://github.com/${data[i].gitHub}">${data[i].gitHub}</a></li>
							</ul>
						</div>
					</div>`;
		} else if (data[i].getRole() == "Intern") {
			employee = `
					<div class="card">
						<div class="card-header">
							<h2 class="card-title">${data[i].name}</h2>
							<h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern</h3>
						</div>
						<div class="card-body">
							<ul class="list-group">
								<li class="list-group-item">ID: ${data[i].id}</li>
								<li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
								<li class="list-group-item">School: ${data[i].school}</li>
							</ul>
						</div>
					</div>`;
		};

		content = content.concat(employee);
	}

	content = content.concat(ending);

	return content;
}

module.exports = generateHTML;
